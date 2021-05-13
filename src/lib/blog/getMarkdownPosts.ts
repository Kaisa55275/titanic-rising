import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import { BASE_URL } from '../constants'

type Data = {
  title: string
  published: boolean
  draft: boolean
  date: number
  ogp: string
  tag: string[]
}

type ImportedMDXPost = {
  data: Data
  content: string
  slug: string
}

export type ImportedMDXPosts = ImportedMDXPost[]

const postDir = path.join(process.cwd(), 'posts/docs/')

const dataProcessor = (args: { [key: string]: unknown }): Data => {
  const [published, draft] = [args.published, args.draft].map((val) =>
    typeof val === 'boolean' ? val : false
  )

  const date =
    typeof args.date === 'number'
      ? args.date
      : Number(dayjs().format('YYYYMMDD'))

  const ogp =
    typeof args.ogp === 'string' ? args.ogp : `${BASE_URL}/images/tr.jpg`

  const tag: string[] = args.tag instanceof Array ? args.tag : []

  return {
    title: `${args.title}` || 'Titanic Rising',
    published,
    draft,
    date,
    ogp,
    tag
  }
}

export const getMarkdownPostsPaths = () => {
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

    const mdxPosts: ImportedMDXPost = {
      data: dataProcessor(data),
      slug,
      content
    }

    return mdxPosts
  })

  const contents = await Promise.all(contentsPromise)

  return contents
}
