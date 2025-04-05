/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable type checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint checking during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure output directory for static export
  output: 'export',
  
  // Ensures build produces static output
  trailingSlash: true,
  
  // Use relative paths for GitHub Pages
  basePath: '',
  assetPrefix: './',
  
  // Fix GitHub Pages routes for images
  images: {
    unoptimized: true,
  },
  
  // Set to true for proper GitHub Pages handling
  skipTrailingSlashRedirect: false
}

module.exports = nextConfig