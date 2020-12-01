import React from 'react'
import { getTagColor } from 'src/assets/blog/tags'
import { normalizeMetaDate } from 'src/lib/utils/normalizeDate'
import styled from 'styled-components'
import { Post } from 'types/data/blog'
import { A } from '../a'
import { H1 } from '../h/H1'
import Tag, { TagsWrapper } from '../tag'

type Props = {
  posts: Post[]
  title?: string
}

const Component: React.FCX<Props> = (props) => {
  return (
    <div className={props.className}>
      <H1>{props.title}</H1>
      <ul className={`${props.className}__list`}>
        {props.posts.map((post) => (
          <li key={post.slug} className={`${props.className}-link`}>
            <A to={`/blog/${post.slug}`} key={post.slug}>
              <strong>{post.title}</strong>
            </A>
            <div className={`${props.className}-link__info`}>
              {post.draft && <div className="draft">DRAFT</div>}
              <div className="authors">By: Daiki Nimura</div>
              <div className="posted">
                Posted: {normalizeMetaDate(post.date)}
              </div>
              {post.tag && (
                <TagsWrapper>
                  {post.tag.map((t) => (
                    <Tag
                      key={t}
                      slug={t.toLowerCase()}
                      title={t}
                      color={getTagColor(t)}
                    />
                  ))}
                </TagsWrapper>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const StyledComponent = styled(Component)`
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
`

export const Blog = StyledComponent
