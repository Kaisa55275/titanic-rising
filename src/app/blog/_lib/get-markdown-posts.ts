import path from "path"
import fs from "fs"
import matter from "gray-matter"
import dayjs from "dayjs"

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

const postDir = path.join(process.cwd(), "src/posts/")

const dataProcessor = (args: Partial<Data> & { title?: string; tag?: string[] }): Data => {
  const {
    title = "Titanic Rising",
    published = false,
    draft = false,
    date = Number(dayjs().format("YYYYMMDD")),
    ogp = `/images/tr.jpg`,
    tag = [],
  } = args

  return {
    title,
    published: Boolean(published),
    draft: Boolean(draft),
    date,
    ogp,
    tag: Array.isArray(tag) ? tag : [],
  }
}

export const getMarkdownPostsPaths = () => {
  return fs.readdirSync(postDir).map((path) => path.replace(/\.mdx$/, ""))
}

const getMdxData = async (filename: string): Promise<ImportedMDXPost> => {
  const fullPath = path.join(postDir, filename)
  const fileContent = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContent)
  const slug = filename.replace(/\.mdx$/, "")

  return {
    data: dataProcessor(data),
    slug,
    content,
  }
}

export const getMarkDownPosts = async (): Promise<ImportedMDXPosts> => {
  const filenames = fs.readdirSync(postDir)
  const mdxPosts = await Promise.all(filenames.map(getMdxData))
  return mdxPosts.sort((a, b) => (dayjs(a.data.date).isAfter(dayjs(b.data.date)) ? -1 : 1))
}

export const getMarkDownPost = async (slug: string): Promise<ImportedMDXPost> => {
  return await getMdxData(`${slug}.mdx`)
}
