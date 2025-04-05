/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // Handle trailing slashes to be compatible with GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig
