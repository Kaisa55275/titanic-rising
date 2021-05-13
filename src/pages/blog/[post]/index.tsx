import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useAmp } from 'next/amp'
import React from 'react'
import { Layout } from 'src/components/Layout'
import { Head } from 'src/components/Head'
import { Post } from 'src/components/Post'
import { BlogSeo } from 'src/components/Seo/Blog'
import { BookMarkInfo, getBookMarkInfo } from 'src/lib/blog/getBookmarkInfo'
import {
  getMarkDownPosts,
  getMarkdownPostsPaths
} from 'src/lib/blog/getMarkdownPosts'
import { getPostSlug } from 'src/lib/blog/getPostSlug'
import { getTopArticles } from 'src/lib/blog/getTopArticles'
import { BASE_URL } from 'src/lib/constants'
import { Post as PostType } from 'types/data/blog'
import { TopArticles } from 'types/data/topArticles'
import { processMdxPosts } from 'src/lib/blog/processMdxPosts'

type Props = {
  post: PostType
  posts: PostType[]
  topArticles: TopArticles
  bookMarkInfo: BookMarkInfo
}

const PostPage: NextPage<Props> = (props) => {
  const isAmp = useAmp()

  return (
    <div className="post-page">
      <Head noIndex={props.post.draft}>
        {!isAmp && (
          <link
            rel="amphtml"
            href={BASE_URL + '/blog/' + props.post.slug + '.amp'}
          />
        )}
      </Head>
      <BlogSeo post={props.post} />
      <Layout>
        <Post
          post={props.post}
          posts={props.posts}
          topArticles={props.topArticles}
          bookMarkInfo={props.bookMarkInfo}
        />
      </Layout>
    </div>
  )
}

export default PostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxPaths = getMarkdownPostsPaths()
  const paths = mdxPaths.map((path) => ({ params: { post: path } }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const postSlug = getPostSlug(ctx)
  const topArticles = await getTopArticles()
  const mdxPosts = await getMarkDownPosts()

  const posts = processMdxPosts(mdxPosts)
  const post = posts.find((p) => p.slug === postSlug)
  const bookMarkInfo = (await getBookMarkInfo(post.content)) || []

  return {
    props: {
      post,
      posts,
      topArticles,
      bookMarkInfo
    },
    revalidate: 10
  }
}

export const config = {
  amp: 'hybrid'
}
