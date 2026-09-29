const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const manifestPath = path.join(buildDir, 'asset-manifest.json');
const reportPath = path.join(buildDir, 'DEPLOY_MANIFEST.txt');

if (!fs.existsSync(manifestPath)) {
  console.error('\x1b[31m[ERROR] build/asset-manifest.json not found. Please run "npm run build" first.\x1b[0m');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const files = manifest.files || {};
const entrypoints = manifest.entrypoints || [];

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
  return (bytes / 1048576).toFixed(2) + ' MB';
}

function getFileSize(relPath) {
  const cleanPath = relPath.replace(/^\.\//, '');
  const fullPath = path.join(buildDir, cleanPath);
  if (fs.existsSync(fullPath)) {
    return formatBytes(fs.statSync(fullPath).size);
  }
  return 'N/A';
}

const lines = [];
lines.push('========================================================================');
lines.push('                   CITI ULTIMA - PRODUCTION DEPLOYMENT MANIFEST          ');
lines.push(`                   Generated: ${new Date().toISOString()}`);
lines.push('========================================================================');
lines.push('');
lines.push('Target Server Directory:');
lines.push('  /microsite/credit-cards/rewards/ultima-card-byinviteonly/');
lines.push('');
lines.push('------------------------------------------------------------------------');
lines.push(' 1. CORE FILES (MANDATORY ON EVERY RELEASE / CODE CHANGE)');
lines.push('------------------------------------------------------------------------');
lines.push(` [HTML]  index.html (${getFileSize('index.html')}) -> Upload to root of microsite`);

entrypoints.forEach((ep) => {
  const size = getFileSize(ep);
  lines.push(` [BUNDLE] ${ep} (${size})`);
});

lines.push('');
lines.push('------------------------------------------------------------------------');
lines.push(' 2. STATIC ASSETS & MEDIA REFERENCED IN THIS BUILD');
lines.push('------------------------------------------------------------------------');

const assetKeys = Object.keys(files).filter(k => !k.endsWith('.map') && k !== 'index.html' && !entrypoints.includes(files[k]));

assetKeys.forEach(k => {
  const filePath = files[k];
  const size = getFileSize(filePath);
  lines.push(` ${filePath.padEnd(55)} [${size}]`);
});

lines.push('');
lines.push('------------------------------------------------------------------------');
lines.push(' 3. LOCALES & AUXILIARY FILES');
lines.push('------------------------------------------------------------------------');
lines.push(' - locales/en/translation.json');
lines.push(' - static/css/style.css');
lines.push(' - manifest.json');
lines.push(' - robots.txt');
lines.push('');
lines.push('========================================================================');
lines.push(' DEPLOYMENT SUMMARY:');
lines.push(' - If only React/JS/CSS changed: Upload index.html + build/static/ folder.');
lines.push(' - If copy/text changed in translation: Also upload build/locales/ folder.');
lines.push('========================================================================');

const output = lines.join('\n');
console.log(output);

fs.writeFileSync(reportPath, output, 'utf8');
console.log(`\n\x1b[32m✔ Deployment manifest saved to: build/DEPLOY_MANIFEST.txt\x1b[0m\n`);
