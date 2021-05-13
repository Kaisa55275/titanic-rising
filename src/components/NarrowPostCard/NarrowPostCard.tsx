import React from 'react'
import { Img } from 'src/components/Img'
import styled, { css } from 'styled-components'
import { fontFamily, ls, mq } from 'src/assets/styles/variable'
import dayjs from 'dayjs'
import { TagsWrapper, Tag } from '../Tag'
import { getTagColor } from 'src/assets/blog/tags'
import { A } from '../A'

type Props = {
  href: string
  title: string
  content: string
  thumbnail: string
  publishedAt: string
  tag: string[]
  priority: boolean
}

const Component: React.FCX<Props> = (props) => {
  return (
    <div className={props.className}>
      <A to={props.href} className={`${props.className}-anchor`}>
        <div className={`${props.className}-anchor__content`}>
          <h4 className={`${props.className}-anchor-title`}>{props.title}</h4>
          <time className={`${props.className}-anchor-date`}>
            {dayjs(props.publishedAt).format('YYYY/MM/DD')}
          </time>
          <div className={`${props.className}-tags`}>
            <TagsWrapper>
              {props.tag.map((t) => (
                <Tag key={t} title={t} color={getTagColor(t)} />
              ))}
            </TagsWrapper>
          </div>
        </div>
        <div
          className={`${props.className}-anchor__thumbnail place-holder-loading 3s`}
        >
          <Img
            src={props.thumbnail}
            width={100}
            height={100}
            alt={props.title}
            layout="fill"
            nextImageProps={{
              objectFit: 'cover',
              priority: props.priority
            }}
          />
        </div>
      </A>
    </div>
  )
}

const StyledComponent = styled(Component)`
  &-anchor {
    display: flex;
    justify-content: space-between;

    &__thumbnail {
      height: 110px;
      position: relative;
      width: 35%;
      overflow: hidden;
      border-radius: 8px;
      background-color: #e5e5e5;

      > * {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__content {
      width: 60%;
      padding: 8px 0;
    }

    &-title {
      font-size: 1.6rem;
      line-height: 150%;
      margin-bottom: 10px;
    }

    &-texts {
      margin-bottom: 8px;
      font-size: 1.4rem;
      line-height: 180%;

      ${mq('sp_wide')} {
        font-size: 1.2rem;
      }
    }

    &-date {
      ${fontFamily.nuito};
      ${ls(50)};
      ${(props) => css`
        color: ${props.theme.color.gray};
      `}
      font-size: 1.2rem;
      margin-bottom: 8px;
    }
  }
`

export const NarrowPostCard = StyledComponent
