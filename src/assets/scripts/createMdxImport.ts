import { join } from 'path'
import { getMarkDownPosts } from '../../lib/blog/getMarkdownPosts'
import { writeFile } from '../../lib/fs-helpers'
import * as Log from 'next/dist/build/output/log'

export const createMdxImport = () => {
  getMarkDownPosts().then((mdxPosts) => {
    const slugs = mdxPosts.map((post) => post.slug)
    const targetPath = `${join(process.cwd(), 'posts')}/mdx-list.ts`
    const stringifiedImports = slugs
      .map((s) => `'${s}': dynamic(() => import('posts/docs/${s}.mdx'))`)
      .join(',')

    const stringifiedFileContent = `
      import dynamic from 'next/dynamic'
      type MDXPostsType = { [key: string]: React.ComponentType }
      export const MDXPosts: MDXPostsType = {${stringifiedImports}}
    `
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const formatted = require('prettier').format(stringifiedFileContent, {
      singleQuote: true,
      semi: false,
      trailingComma: 'none',
      parser: 'typescript'
    })

    writeFile(targetPath, formatted)

    Log.info(
      `\u001b[32m[Titanic Rising MDX Processor]: Successfully created import references for ${slugs.length} paths.`
    )
    Log.info(`\u001b[32mSee '${targetPath}' \u001b[32mfor details.\u001b[37m`)
  })
}
