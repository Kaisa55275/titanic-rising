import sitemap from 'nextjs-sitemap-generator'
import * as fs from 'fs'
import { BASE_URL } from './src/lib/config'

console.log('generating sitemap for ' + BASE_URL)

export const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString()

const baseUrl = BASE_URL

const main = async () => {
  sitemap({
    baseUrl,
    pagesDirectory: __dirname + '/.next/serverless/pages',
    targetDirectory: 'public/',
    ignoredExtensions: ['js', 'map'],
    ignoredPaths: ['[fallback]']
  })
}

main()
