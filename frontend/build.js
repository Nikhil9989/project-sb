const fs = require('fs');
const path = require('path');

// Create .nojekyll file only when building for GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';

if (isGithubPages) {
  // Ensure the out directory exists
  const outDir = path.join(__dirname, 'out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
    console.log('Created output directory');
  }

  // Create .nojekyll file
  const nojekyllPath = path.join(outDir, '.nojekyll');
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file');
} else {
  console.log('Skipping GitHub Pages setup - building for Vercel');
}
