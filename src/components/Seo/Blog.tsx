import Head from 'next/head'
import React from 'react'
import { BASE_URL } from 'src/lib/constants'
import { Post } from 'types/data/blog'

type Props = {
  post: Post
}

const Component: React.FC<Props> = (props) => {
  return (
    <Head>
      <link
        key="canonical"
        rel="canonical"
        href={BASE_URL + '/blog/' + props.post.slug}
      />
      {/* <meta key="description" name="description" content={description} /> */}
      <meta
        key="og:title"
        property="og:title"
        content={props.post.title || 'Titanic Rising'}
      />
      <meta
        key="og:image"
        property="og:image"
        content={props.post.ogp || `${BASE_URL}/images/tr.jpg`}
      />
      <title key="title">{props.post.title || 'Titanic Rising'}</title>
    </Head>
  )
}

export const BlogSeo = Component
