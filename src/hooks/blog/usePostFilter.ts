import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Post } from 'types/data/blog'

type Props = {
  posts: Post[]
}

export const usePostFilter = (props: Props) => {
  const router = useRouter()

  const availablePosts = useMemo(() => {
    return props.posts.filter((post) => !post.draft)
  }, [props.posts])

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
