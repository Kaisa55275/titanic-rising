/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const PWA = require('next-pwa')
const optimizedImages = require('next-optimized-images')
const path = require('path')

const nextConfig = {
  target: 'experimental-serverless-trace',
  env: {
    BASE_URL: process.env.BASE_URL,
    VIEW_ID: process.env.VIEW_ID
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  webpack(config) {
    config.resolve.extensions.push('.mdx')
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        'babel-loader',
        '@mdx-js/loader',
        path.join(__dirname, './src/lib/loader/fm-loader')
      ]
    })
    return config
  }
}

module.exports = withPlugins([PWA, optimizedImages], nextConfig)
