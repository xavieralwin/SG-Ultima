const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const icmsDir = path.join(rootDir, 'build-icms');
const manifestPath = path.join(buildDir, 'asset-manifest.json');

if (!fs.existsSync(manifestPath)) {
  console.error('\x1b[31m[ERROR] build/asset-manifest.json not found. Please run "npm run build" first.\x1b[0m');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const filesMap = manifest.files || {};

// Build the set of all deployable files (relative to build/)
// Excludes *.map, *.LICENSE.txt, asset-manifest.json, DEPLOY_MANIFEST.txt,
// locales/en/old.json, locales/en/travel-old, site.webmanifest, pdfs/
const deployableFiles = new Set();

Object.entries(filesMap).forEach(([key, relPath]) => {
  if (key.endsWith('.map') || relPath.endsWith('.map')) {
    return;
  }
  const normalized = relPath.replace(/^\.\//, '').replace(/^\//, '');
  if (normalized) {
    deployableFiles.add(normalized);
  }
});

const requiredPublicFiles = [
  'index.html',
  'locales/en/translation.json',
  'static/css/style.css',
  'static/js/player-0.1.0.min.js',
  'manifest.json',
  'robots.txt',
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
];

requiredPublicFiles.forEach((relPath) => {
  deployableFiles.add(relPath);
});

// Find files in build/ modified or added compared to HEAD
function getChangedBuildFiles() {
  const changed = new Set();

  const runGit = (args) =>
    execFileSync('git', ['-c', 'core.safecrlf=false', ...args], {
      cwd: rootDir,
      encoding: 'utf8',
      maxBuffer: 20 * 1024 * 1024,
    });

  // Check whether build/ exists in HEAD
  const headBuildTree = runGit(['ls-tree', '-r', '--name-only', 'HEAD', '--', 'build/']).trim();
  if (!headBuildTree) {
    // First-time build (no build/ in HEAD): include all deployable files
    return Array.from(deployableFiles);
  }

  // Modified or Added files compared to HEAD (respects .gitattributes / core.autocrlf)
  const diffOut = runGit(['diff', '--name-only', '--diff-filter=AM', 'HEAD', '--', 'build/']);
  // Untracked new files in build/
  const untrackedOut = runGit(['ls-files', '--others', '--exclude-standard', '--', 'build/']);

  [diffOut, untrackedOut].forEach((output) => {
    output
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .forEach((gitPath) => {
        const rel = gitPath.replace(/^build\//, '');
        if (deployableFiles.has(rel)) {
          changed.add(rel);
        }
      });
  });

  return Array.from(changed);
}

let filesToCopy;
try {
  filesToCopy = getChangedBuildFiles().sort();
} catch (err) {
  console.error('\x1b[31m[ERROR] Failed to compare build/ against Git HEAD:\x1b[0m', err.message);
  process.exit(1);
}

// Recreate build-icms/ cleanly so only current changed deployable files remain
fs.rmSync(icmsDir, { recursive: true, force: true });
fs.mkdirSync(icmsDir, { recursive: true });

let copiedCount = 0;
let totalBytes = 0;

filesToCopy.forEach((relPath) => {
  const srcPath = path.join(buildDir, relPath);
  const destPath = path.join(icmsDir, relPath);

  if (!fs.existsSync(srcPath)) {
    return;
  }

  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.copyFileSync(srcPath, destPath);
  totalBytes += fs.statSync(destPath).size;
  copiedCount += 1;
});

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

if (copiedCount === 0) {
  console.log('\x1b[33m✔ No deployable files modified or added since HEAD. build-icms/ is empty.\x1b[0m');
} else {
  console.log(`\x1b[32m✔ Created build-icms/ with ${copiedCount} changed deployable file(s) (${formatBytes(totalBytes)}):\x1b[0m`);
  filesToCopy.forEach((relPath) => {
    console.log(`   - ${relPath}`);
  });
}
