import { getMarkDownPost, getMarkDownPosts } from "../_lib/get-markdown-posts"
import { css } from "@kuma-ui/core"
import "highlight.js/styles/github-dark.css"
import React from "react"
import { MDXRenderer } from "./_components/mdx-renderer"

export const generateStaticParams = async () => {
  const posts = await getMarkDownPosts()

  return posts.map((post) => {
    return {
      params: {
        post: post.slug,
      },
    }
  })
}

export const generateMetadata = async ({
  params: { post: slug },
}: {
  params: {
    post: string
  }
}) => {
  const post = await getMarkDownPost(slug)

  if (!post) {
    return null
  }

  return {
    title: post.data.title,
    ogp: post.data.ogp,
  }
}

export default async function Page({
  params: { post: slug },
}: {
  params: {
    post: string
  }
}) {
  const post = await getMarkDownPost(slug)

  if (!post) {
    return <div>404</div>
  }

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{post.data.title}</h1>
      <main className={styles.content}>
        <div className="markdown-viewer">
          <MDXRenderer source={post.content} />
        </div>
      </main>
    </div>
  )
}

const styles = {
  root: css`
    font-size: 1.4rem;
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 0;
  `,

  title: css`
    font-size: 2.4rem;
    margin-bottom: 20px;
    font-weight: bold; 
  `,

  content: css`
    .markdown-viewer h1,
    .markdown-viewer h2,
    .markdown-viewer h3,
    .markdown-viewer h4,
    .markdown-viewer h5,
    .markdown-viewer h6 {
      margin-top: 1.4em;
      font-weight: bold;
    }

    .markdown-viewer h1 {
      font-size: 2em;
    }

    .markdown-viewer h2 {
      font-size: 1.5em;
    }

    .markdown-viewer h3 {
      font-size: 1.17em;
    }

    .markdown-viewer h4 {
      font-size: 1em;
    }

    .markdown-viewer h5 {
      font-size: 0.83em;
    }

    .markdown-viewer h6 {
      font-size: 0.67em;
    }

    .markdown-viewer p {
      margin-top: 1em;
    }

    .markdown-viewer ul,
    .markdown-viewer ol {
      padding-left: 2em;
      margin-top: 1em;
    }

    .markdown-viewer a {
      display: inline-block;
      text-decoration: underline;
    }

    .markdown-viewer blockquote {
      border-left: 4px solid #ccc;
      padding-left: 1em;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    .markdown-viewer ul {
      list-style-type: disc; /* Set the list style for unordered lists to "disc" (default) */
    }

    .markdown-viewer ol {
      list-style-type: decimal; /* Set the list style for ordered lists to "decimal" (default) */
    }

    /* Nested lists */
    .markdown-viewer ul ul,
    .markdown-viewer ol ul {
      list-style-type: circle; /* Set the list style for nested unordered lists to "circle" */
    }

    .markdown-viewer ul ol,
    .markdown-viewer ol ol {
      list-style-type: lower-alpha; /* Set the list style for nested ordered lists to "lower-alpha" (a, b, c, ...) */
    }

    .markdown-viewer {
      overflow-wrap: anywhere;
    }

    .markdown-viewer li ul,
    .markdown-viewer li ol {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }

    .markdown-viewer li {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }

    .markdown-viewer pre {
      margin-top: 1em;
    }

    .markdown-viewer .bookmark {
      width: 100%;
      max-width: 500px;
    }

    .markdown-viewer img {
      width: 100%;
      max-width: 500px;
      display: block;
      margin: 20px 0;
    }
  `,
}
