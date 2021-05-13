import React from 'react'
import styled from 'styled-components'
import { Post } from 'types/data/blog'
import { NarrowPostCard } from 'src/components/NarrowPostCard'

type Props = {
  posts: Post[]
  title?: string
}

const Component: React.FCX<Props> = (props) => {
  return (
    <div className={props.className}>
      <ul className={`${props.className}__list`}>
        {props.posts.map((post, index) => (
          <li key={post.slug} className={`${props.className}-list-item`}>
            <NarrowPostCard
              href={`/blog/${post.slug}`}
              title={post.title}
              thumbnail={post.ogp}
              content={post.content}
              publishedAt={post.date.toString()}
              tag={post.tag}
              priority={index < 6}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  > h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  &-link {
    margin: 0 auto 20px;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 550px;
    > a {
      width: 58%;
      font-size: 1.6rem;
      text-decoration: underline;
    }
    &__info {
      width: 38%;
      text-align: right;
      .draft {
        font-weight: bold;
        color: purple;
      }
    }
  }

  &__list {
    width: 100%;
  }

  &-list-item {
    margin-bottom: 30px;
    width: 100%;
  }
`

export const Blog = StyledComponent
