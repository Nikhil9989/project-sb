/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable type checking during build for faster builds
  // Use ESLint checking separately
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint checking during build
  // We're running ESLint separately
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimize for static exports if needed
  output: 'standalone',
  // Enable experimental features if needed
  experimental: {
    // Add experimental features if needed
  },
  // Image configuration
  images: {
    domains: [],
    // Allow these sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Allow these image sizes for Image component
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

export default nextConfig
