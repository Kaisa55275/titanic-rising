import React from 'react'
import { getTagColor } from 'src/assets/blog/tags'
import { Title } from 'src/components/Title'
import { normalizeMetaDate } from 'src/lib/utils/normalizeDate'
import styled from 'styled-components'
import { Post as PostType } from 'types/data/blog'
import { Tag } from '../Tag'

type Props = {
  post: PostType
}

const Component: React.FCX<Props> = (props) => {
  return (
    <div className={props.className}>
      <Title>{props.post.title}</Title>
      <div className="info">
        <div className="authors">By: Daiki Nimura</div>
        <div className="posted">
          Posted: {normalizeMetaDate(props.post.date)}
        </div>
        {props.post.tag && (
          <div className="tag-wrapper">
            {props.post.tag.map((t) => (
              <Tag key={t} title={t} color={getTagColor(t)} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  font-size: 1.4rem;

  h1 {
    text-align: center;
    font-size: 2rem;
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    > * {
      margin: 0px 10px 10px;
    }
  }

  .tag-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const PostHeading = StyledComponent
