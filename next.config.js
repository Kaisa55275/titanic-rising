const { withKumaUI } = require("@kuma-ui/next-plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "titanicrising.jp",
      "localhost",
      "res.cloudinary.com",
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = withKumaUI(nextConfig)
