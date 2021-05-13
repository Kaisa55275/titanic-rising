import React from 'react'
import { Layout } from 'src/components/Layout'
import { GetStaticProps, NextPage } from 'next'
import { Head } from 'src/components/Head'
import { getMarkDownPosts } from 'src/lib/blog/getMarkdownPosts'
import { Post } from 'types/data/blog'
import { BlogContainer } from 'src/components/Blog/BlogContainer'
import { useAmp } from 'next/amp'
import { BASE_URL } from 'src/lib/constants'
import { processMdxPosts } from 'src/lib/blog/processMdxPosts'
import { MutableSnapshot } from 'recoil'
import { blogInitialState, blogState, BlogState } from 'src/atoms/blog'

type Props = {
  posts: Post[]
}

const BlogPage: NextPage<Props> = ({ posts = [] }) => {
  const isAmp = useAmp()
  const initializeState = ({ set }: MutableSnapshot) => {
    set<BlogState>(blogState, {
      ...blogInitialState,
      posts
    })
  }

  return (
    <div className="blog-page">
      <Head title="Blog | Titanic Rising">
        {isAmp ? (
          <link key="canonical" rel="canonical" href={BASE_URL + '/blog'} />
        ) : (
          <link rel="amphtml" href={BASE_URL + '/blog' + '.amp'} />
        )}
      </Head>
      <Layout initializeState={initializeState}>
        <BlogContainer />
      </Layout>
    </div>
  )
}

export const config = {
  amp: 'hybrid'
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const mdxPosts = await getMarkDownPosts()
  const posts = processMdxPosts(mdxPosts)

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

export default BlogPage
