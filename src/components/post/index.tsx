import React from 'react'
import { blogStyles } from 'src/assets/styles/blogStyles'
import styled from 'styled-components'
import { Post as PostType } from 'types/data/blog'
import { MDXProvider } from '@mdx-js/react'
import { tagNames } from 'src/assets/blog/tags'
import { PostHeading } from './Heading'
import TopArticles from '../list/TopArticles'
import { TopArticles as TopArticlesType } from 'types/data/topArticles'
import Dynamic from '../shared/dynamic'
import { Img } from '../img'

type Props = {
  post: PostType
  posts: PostType[]
  topArticles: TopArticlesType
}

const Component: React.FCX<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const MDX = require(`posts/docs/${props.post.slug}.mdx`)

  const isFrontmatter = (children: string) => {
    const keys = ['title', 'published', 'draft', 'date', 'ogp']
    return !keys.some((key) => !children.includes(key))
  }

  const components = {
    p: (props: { children: string }) => {
      if (isFrontmatter(String(props.children))) {
        return null
      }
      return <p className={`mdx-element-paragraph`}>{props.children}</p>
    },

    ul: (props) => {
      if (props.children instanceof Array) {
        const isNotAllTagName = props.children.some((child) => {
          return !tagNames.includes(child.props.children)
        })
        if (!isNotAllTagName) return null
      }
      if (
        typeof props.children?.props?.children === 'string' &&
        tagNames.includes(props.children?.props?.children)
      ) {
        return null
      }
      return <ul className="mdx-element-ul">{props.children}</ul>
    },

    code: (props) => {
      const language = props.className.includes('language-')
        ? props.className.split('language-')[1]
        : props.className
      return <Dynamic.Code language={language}>{props.children}</Dynamic.Code>
    },

    img: (props) => {
      if (props.src.includes('?w')) {
        if (!props.src.includes('&h')) throw new Error('height missing!!')
        const src = props.src.split('?')[0]
        const params = props.src.split('?')[1]
        const width = params.split('w=')[1].split('&h')[0]
        const height = params.split('h=')[1]

        return (
          <Img
            className="image-mdx"
            src={src}
            alt={props.alt}
            width={width}
            height={height}
          />
        )
      }

      return (
        <Img
          className="image"
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      )
    }
  }

  return (
    <div className={props.className}>
      <PostHeading post={props.post} />
      <div className="content">
        <MDXProvider components={components}>
          <MDX.default />
        </MDXProvider>
      </div>
      <div className={`${props.className}__top-articles`}>
        <h3>人気の記事</h3>
        <TopArticles topArticles={props.topArticles} posts={props.posts} />
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  .content {
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    ${blogStyles};
  }

  &__top-articles {
    > h3 {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }
  }
`

export const Post = StyledComponent
