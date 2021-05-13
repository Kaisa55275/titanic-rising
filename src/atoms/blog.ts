import { atom } from 'recoil'
import { Post } from 'types/data/blog'
import { TopArticles } from 'types/data/topArticles'

export type BlogState = {
  topArticles: TopArticles
  posts: Post[]
}

export const blogInitialState: BlogState = {
  topArticles: null,
  posts: []
}

export const blogState = atom({
  key: 'blog',
  default: blogInitialState
})
