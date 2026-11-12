const fs = require('fs');
const path = require('path');

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

// Collect all active runtime files from asset-manifest.json (excluding source maps)
const filesToCopy = new Set();

Object.entries(filesMap).forEach(([key, relPath]) => {
  if (key.endsWith('.map') || relPath.endsWith('.map')) {
    return;
  }
  const normalized = relPath.replace(/^\.\//, '').replace(/^\//, '');
  if (normalized) {
    filesToCopy.add(normalized);
  }
});

// Required runtime files copied from public/ into build/
// Excludes non-deployable files: *.map, *.LICENSE.txt, asset-manifest.json,
// DEPLOY_MANIFEST.txt, locales/en/old.json, locales/en/travel-old, site.webmanifest, pdfs/
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
  filesToCopy.add(relPath);
});

// Recreate build-icms/ cleanly so stale files from earlier builds are never kept
fs.rmSync(icmsDir, { recursive: true, force: true });
fs.mkdirSync(icmsDir, { recursive: true });

let copiedCount = 0;
let totalBytes = 0;
const missingFiles = [];

Array.from(filesToCopy)
  .sort()
  .forEach((relPath) => {
    const srcPath = path.join(buildDir, relPath);
    const destPath = path.join(icmsDir, relPath);

    if (!fs.existsSync(srcPath)) {
      missingFiles.push(relPath);
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

console.log(`\x1b[32m✔ Created build-icms/ with ${copiedCount} deployable files (${formatBytes(totalBytes)})\x1b[0m`);
if (missingFiles.length > 0) {
  console.warn(`\x1b[33m[WARN] Skipped missing files:\n  - ${missingFiles.join('\n  - ')}\x1b[0m`);
}

