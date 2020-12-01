import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { usePostFilter } from 'src/hooks/blog/usePostFilter'
import { Post } from 'types/data/blog'
import { Blog } from '.'

type Props = {
  posts: Post[]
  includesDraft: boolean
  title?: string
}

const Container: React.FC<Props> = (props) => {
  const router = useRouter()
  const { getTagFilteredPosts, availablePosts, sortByDates } = usePostFilter(
    props
  )
  const targetPosts = props.includesDraft ? props.posts : availablePosts
  const posts = sortByDates(getTagFilteredPosts(targetPosts))

  const title = useMemo(() => {
    return (
      props.title ||
      `Blog${router.query.tag ? ` ($tag === '${router.query.tag}')` : ''}`
    )
  }, [props.includesDraft, props.title, router.query.tag])


  return (
    <Blog title={title} posts={posts} />
  )
}

export const BlogContainer = Container
