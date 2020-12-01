import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const postDir = path.join(process.cwd(), 'posts/docs/')

export const getMarkdownPostsPaths = async () => {
  const postList = fs.readdirSync(postDir).map((path) => path.split(/\.mdx/)[0])
  return postList
}

export const getMarkDownPosts = async () => {
  const pathList = fs.readdirSync(postDir)
  const contentsPromise = pathList.map(async (p) => {
    const fullPath = path.join(postDir, p)
    const filePath = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(filePath)
    const slug = p.split(/\.mdx/)[0]

    return {
      data,
      slug,
      content
    }
  })

  const contents = await Promise.all(contentsPromise)

  return contents
}
