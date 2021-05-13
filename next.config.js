/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const PWA = require('next-pwa')
const optimizedImages = require('next-optimized-images')
const path = require('path')

const { createMdxImport } = require('./src/assets/scripts/main')
createMdxImport()

/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */
const nextConfig = {
  target: 'serverless',
  env: {
    BASE_URL: process.env.BASE_URL,
    CR_PASS: process.env.CR_PASS,
    VIEW_ID: process.env.VIEW_ID,
    FS_ORG: process.env.FS_ORG,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'titanicrising.jp',
      'localhost',
      'res.cloudinary.com'
    ]
  },
  future: {
    webpack5: true
  },
  webpack(config, { webpack }) {
    config.resolve.extensions.push('.mdx')
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        'babel-loader',
        '@mdx-js/loader',
        path.join(__dirname, './src/lib/loader/fm-loader')
      ]
    })

    const ignorePlugins = [/canvas/, /bufferutil/, /utf-8-validate/]

    ignorePlugins.forEach((resourceRegExp) => {
      config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp }))
    })

    return config
  }
}

module.exports = withPlugins([PWA, optimizedImages], nextConfig)
