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
  // Configure output directory
  distDir: 'out',
  // Skip touch .nojekyll
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  // Static export
  output: 'export',
}

module.exports = nextConfig
