import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useAmp } from 'next/amp'
import React from 'react'
import Header from 'src/components/Header'
import Layout from 'src/components/layout'
import Head from 'src/components/layout/Head'
import { Post } from 'src/components/post'
import {
  getMarkDownPosts,
  getMarkdownPostsPaths
} from 'src/lib/blog/getMarkdownPosts'
import { getPostSlug } from 'src/lib/blog/getPostSlug'
import { getTopArticles } from 'src/lib/blog/getTopArticles'
import { BASE_URL } from 'src/lib/config'
import { Post as PostType } from 'types/data/blog'
import { TopArticles } from 'types/data/topArticles'

type StaticProps = {
  post: PostType
  posts: PostType[]
  topArticles: TopArticles
}

const PostPage: NextPage<StaticProps> = (props) => {
  const isAmp = useAmp()

  return (
    <div className="post-page">
      <Head noIndex={props.post.draft}>
        {isAmp ? (
          <link rel="canonical" href={BASE_URL + '/blog/' + props.post.slug} />
        ) : (
          <link
            rel="amphtml"
            href={BASE_URL + '/blog/' + props.post.slug + '.amp'}
          />
        )}
      </Head>
      <Layout>
        <Header />
        <Post
          post={props.post}
          posts={props.posts}
          topArticles={props.topArticles}
        />
      </Layout>
    </div>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxPaths = await getMarkdownPostsPaths()
  const paths = mdxPaths.map((path) => ({ params: { post: path } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<StaticProps> = async (ctx) => {
  const postSlug = getPostSlug(ctx)
  const topArticles = await getTopArticles()
  const mdxPosts = await getMarkDownPosts()

  const posts = mdxPosts.map((target) => ({
    title: target.data.title,
    slug: target.slug,
    published: target.data.published || false,
    draft: target.data.draft || false,
    date: target.data.date,
    ogp: target.data.ogp,
    tag: target.data.tag,
    content: target.content
  }))

  const post = posts.find((p) => p.slug === postSlug)

  return {
    props: {
      post,
      posts,
      topArticles
    }
  }
}

export const config = {
  amp: 'hybrid'
}
