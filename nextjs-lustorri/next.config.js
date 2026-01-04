/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media.giphy.com', 'customer-assets.emergentagent.com'],
  },
}

module.exports = nextConfig
