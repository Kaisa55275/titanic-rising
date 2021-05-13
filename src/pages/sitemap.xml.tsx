import { GetServerSidePropsContext } from 'next'
import { getMarkDownPosts } from 'src/lib/blog/getMarkdownPosts'
import { processMdxPosts } from 'src/lib/blog/processMdxPosts'
import { BASE_URL } from 'src/lib/constants'

const generateSitemapXml = async () => {
  const ignoredPaths = []
  const mdxPosts = await getMarkDownPosts()
  const posts = processMdxPosts(mdxPosts)
  const staticPaths = posts.map((p) => p.slug)

  const formatDate = (dt: Date) => {
    const y = dt.getFullYear()
    const m = ('00' + (dt.getMonth() + 1)).slice(-2)
    const d = ('00' + dt.getDate()).slice(-2)
    return y + '-' + m + '-' + d
  }

  const sitemapTag = `<?xml version="1.0" encoding="UTF-8"?>`
  const sitemapUrlSet = `
    <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
    xmlns:xhtml="http://www.w3.org/1999/xhtml">`

  const urls = [...staticPaths]

  const filteredURLs = urls
    .filter((url) => !ignoredPaths.includes(url))
    .filter((url, index, self) => self.findIndex((e) => e === url) === index)

  const date = formatDate(new Date())

  let str = sitemapTag + sitemapUrlSet

  filteredURLs.forEach((url) => {
    const xmlObject = `
<url>
  <loc>${BASE_URL}/${url}</loc>
  <lastmod>${date}</lastmod>
  <changefreq>weekly</changefreq>
</url>`

    str = str + xmlObject
  })

  str += `</urlset>`
  return str
}

export const getServerSideProps = async ({
  res
}: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml()
  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)

  return {
    props: {}
  }
}

const Page = () => null
export default Page
