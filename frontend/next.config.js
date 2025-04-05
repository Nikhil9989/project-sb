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
  
  // Use empty basePath for custom domain
  basePath: '',
  
  // Fix image loading for static export
  images: {
    unoptimized: true,
  },
  
  // Set to true for proper GitHub Pages handling
  skipTrailingSlashRedirect: false
}

module.exports = nextConfig