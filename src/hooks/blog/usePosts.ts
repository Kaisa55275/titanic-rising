import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { blogState } from 'src/atoms/blog'
import { Post } from 'types/data/blog'

export const usePosts = () => {
  const [blog] = useRecoilState(blogState)
  const router = useRouter()

  const availablePosts = useMemo(() => {
    return blog.posts.filter((post) => !post.draft)
  }, [blog.posts])

  const getTagFilteredPosts = (posts: Post[]) =>
    posts.filter((post) => {
      const tag = router.query.tag as string
      if (!tag) {
        return posts
      }
      const tags = post.tag.map((t) => t.toLowerCase())
      return tags.includes(tag)
    })

  const sortByDates = (posts: Post[]) => {
    const sorted = posts.sort((a, b) => b.date - a.date)
    return sorted
  }

  return {
    availablePosts,
    getTagFilteredPosts,
    sortByDates
  }
}
