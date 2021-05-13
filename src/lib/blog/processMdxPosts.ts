import { Post } from 'types/data/blog'
import { BASE_URL } from '../constants'
import { ImportedMDXPosts } from './getMarkdownPosts'

export const processMdxPosts = (mdxPosts: ImportedMDXPosts): Post[] => {
  return mdxPosts.map((post) => ({
    title: post.data.title,
    slug: post.slug,
    published: post.data.published || false,
    draft: post.data.draft || false,
    date: post.data.date,
    ogp: post.data.ogp || BASE_URL + '/images/tr.jpg',
    tag: post.data.tag,
    content: post.content
  }))
}
