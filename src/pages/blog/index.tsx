import React from 'react'
import Header from 'src/components/Header'
import Layout from 'src/components/layout'
import { GetStaticProps, NextPage } from 'next'
import Head from 'src/components/layout/Head'
import { getMarkDownPosts } from 'src/lib/blog/getMarkdownPosts'
import { Post } from 'types/data/blog'
import { BlogContainer } from 'src/components/blog/container'
import { useRouter } from 'next/router'

type StaticProps = {
  posts: Post[]
}

const BlogPage: NextPage<StaticProps> = ({ posts = [] }) => {
  const router = useRouter()
  const includesDraft = !!router.query.draft
  return (
    <>
      <Head title="Blog | Titanic Rising" />
      <Layout>
        <Header />
        <BlogContainer posts={posts} includesDraft={includesDraft} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const mdxPosts = await getMarkDownPosts()

  const posts = mdxPosts.map((post) => ({
    title: post.data.title,
    slug: post.slug,
    published: post.data.published || false,
    draft: post.data.draft || false,
    date: post.data.date,
    ogp: post.data.ogp,
    tag: post.data.tag,
    content: post.content
  }))

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

export default BlogPage

export const config = {
  amp: 'hybrid'
}
