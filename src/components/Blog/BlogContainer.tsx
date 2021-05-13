import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { usePosts } from 'src/hooks/blog/usePosts'
import { Blog } from '.'

export const BlogContainer: React.VFC = () => {
  const router = useRouter()
  const { getTagFilteredPosts, availablePosts, sortByDates } = usePosts()
  const posts = sortByDates(getTagFilteredPosts(availablePosts))

  const title = useMemo(() => {
    return `Blog${router.query.tag ? ` ($tag === '${router.query.tag}')` : ''}`
  }, [router.query.tag])

  return <Blog title={title} posts={posts} />
}
