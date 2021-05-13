import React from 'react'
import { blogStyles } from 'src/assets/styles/blogStyles'
import styled, { StyledComponentPropsWithRef } from 'styled-components'
import { Post as PostType } from 'types/data/blog'
import { MDXProvider } from '@mdx-js/react'
import { isInTags } from 'src/assets/blog/tags'
import { PostHeading } from '.'
import TopArticles from '../TopArticles'
import { TopArticles as TopArticlesType } from 'types/data/topArticles'
import Prism from 'prismjs'
import { Img } from '../Img'
import { BookMark } from '../BookMark/BookMark'
import { IFrame } from '../IFrame'
import { BookMarkInfo } from 'src/lib/blog/getBookmarkInfo'
import { prismjsStyles } from 'src/assets/styles/prismjsStyles'
import { MDXPosts } from 'posts/mdx-list'
import dynamic from 'next/dynamic'

type Props = {
  post: PostType
  posts: PostType[]
  topArticles: TopArticlesType
  bookMarkInfo: BookMarkInfo
}

type ChildMDXProps = {
  parentName: keyof JSX.IntrinsicElements
  href: string
  originalType: keyof JSX.IntrinsicElements
  mdxType: keyof JSX.IntrinsicElements
  children: '!!BOOKMARK!!' | string
}

type MDXProps = {
  props: ChildMDXProps
}

type MDXChildren = MDXProps | string | Array<MDXProps | string>

type ComponentsOptions = {
  [key in keyof JSX.IntrinsicElements]?: (
    props: {
      children: MDXChildren
      className?: string
      key?: string
    } & Pick<
      StyledComponentPropsWithRef<typeof Img>,
      'width' | 'height' | 'src' | 'alt'
    > &
      Pick<StyledComponentPropsWithRef<typeof BookMark>, 'href'>
  ) => JSX.Element
}

const isArray = (
  mdxChildren: MDXChildren
): mdxChildren is Array<MDXProps | string> => {
  return mdxChildren instanceof Array
}

const isObj = (mdxChildren: MDXChildren): mdxChildren is MDXProps => {
  return mdxChildren instanceof Object
}

const components = {
  img: dynamic<StyledComponentPropsWithRef<typeof Img>>(() =>
    import('src/components/Img').then((d) => d.Img)
  ),
  iframe: dynamic<StyledComponentPropsWithRef<typeof IFrame>>(() =>
    import('src/components/IFrame').then((d) => d.IFrame)
  ),
  bookmark: dynamic<StyledComponentPropsWithRef<typeof BookMark>>(() =>
    import('src/components/BookMark').then((d) => d.BookMark)
  )
}

const Component: React.FCX<Props> = ({
  bookMarkInfo,
  post,
  posts,
  className,
  topArticles
}) => {
  const MDX = MDXPosts[post.slug]

  const mdxComponents: ComponentsOptions = {
    p: (props) => {
      if (isObj(props.children)) {
        const isBookMarkWrapper = props?.children?.props?.children?.includes(
          '!!BOOKMARK!!'
        )

        if (isBookMarkWrapper) {
          return <div className="bookmark-wrapper">{props.children}</div>
        }
      }

      if (isArray(props.children)) {
        const isBookMarkWrapper = props.children.some((child) => {
          return (
            typeof child !== 'string' &&
            child?.props?.children?.includes('!!BOOKMARK!!')
          )
        })

        if (isBookMarkWrapper) {
          return <div className="bookmark-wrapper">{props.children}</div>
        }
      }

      return (
        <p className="mdx-element-paragraph" key={props.children.toString()}>
          {props.children}
        </p>
      )
    },

    ul: (props) => {
      if (isArray(props.children)) {
        const isNotAllTagName = props.children.some((child) => {
          const name = typeof child === 'string' ? null : child.props.children
          return !isInTags(name)
        })
        if (!isNotAllTagName) return null
      }

      if (isObj(props.children)) {
        if (
          typeof props.children?.props?.children === 'string' &&
          isInTags(props.children?.props?.children)
        ) {
          return null
        }
      }
      return <ul className="mdx-element-ul">{props.children}</ul>
    },

    pre: (props) => {
      return <pre className="mdx-element-pre">{props.children}</pre>
    },

    code: (props) => {
      const language = props.className.includes('language-')
        ? props.className.split('language-')[1]
        : props.className

      const grammar: Prism.Grammar =
        Prism.languages[language.toLowerCase()] || Prism.languages.tsx

      return (
        <code
          key={String(props.children)}
          data-language={language}
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(String(props.children), grammar, language)
          }}
        />
      )
    },

    img: (props) => {
      return (
        <components.img
          className="image"
          src={props.src}
          alt={props.alt || props.src}
          width={Number(props.width)}
          height={Number(props.height)}
        />
      )
    },

    a: (props) => {
      if (typeof props.children !== 'string') return
      if (props.children.includes('!!BOOKMARK!!')) {
        const title = props.children.split('!!BOOKMARK!!')[1]
        const info = bookMarkInfo.find(
          (info) =>
            info?.url?.includes(props.href) || props.href?.includes(info?.url)
        )

        if (!info) {
          return <a href={props.href}>{JSON.stringify(bookMarkInfo)}</a>
        }

        return (
          <BookMark
            key={props.href}
            href={props.href}
            title={title}
            info={info}
          />
        )
      }

      return <a {...props} />
    },

    iframe: (props) => (
      <IFrame
        src={props.src}
        width={Number(props.width)}
        height={Number(props.height)}
      />
    )
  }

  return (
    <div className={className}>
      <PostHeading post={post} />
      <article className={`${className}__content`}>
        <MDXProvider components={mdxComponents}>
          <MDX />
        </MDXProvider>
      </article>
      <div className={`${className}__top-articles`}>
        <h3>人気の記事</h3>
        <TopArticles topArticles={topArticles} posts={posts} />
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  ${blogStyles};
  ${prismjsStyles};

  &__content {
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
  }

  &__top-articles {
    > h3 {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }

    ul {
      margin-left: 0;
      li {
        list-style: none;
        &::before {
          display: none;
        }
      }
    }
  }
`

export const Post = StyledComponent
