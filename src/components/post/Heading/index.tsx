import React from 'react'
import { getTagColor } from 'src/assets/blog/tags'
import { H1 } from 'src/components/h/H1'
import { normalizeMetaDate } from 'src/lib/utils/normalizeDate'
import styled from 'styled-components'
import { Post as PostType } from 'types/data/blog'
import Tag from '../../tag'

type Props = {
  post: PostType
}

const Component: React.FCX<Props> = (props) => {
  return (
    <div className={props.className}>
      <H1>{props.post.title || ''}</H1>
      <div className="info">
        <div className="authors">By: Daiki Nimura</div>
        <div className="posted">
          Posted: {normalizeMetaDate(props.post.date)}
        </div>
        {props.post.tag && (
          <div className="tag-wrapper">
            {props.post.tag.map((t) => (
              <Tag
                key={t}
                slug={t.toLowerCase()}
                title={t}
                color={getTagColor(t)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  font-size: 1.4rem;
  padding: 10px 0;
  .tag-wrapper {
    > * {
      display: inline-block;
    }
  }
`

export const PostHeading = StyledComponent
