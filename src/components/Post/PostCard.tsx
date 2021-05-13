import React from 'react'
import Link from 'next/link'
import { Img } from 'src/components/Img'
import styled, { css } from 'styled-components'
import { fontFamily, ls, mq } from 'src/assets/styles/variable'
import dayjs from 'dayjs'
import { Tag, TagsWrapper } from '../Tag'
import { getTagColor } from 'src/assets/blog/tags'

type Props = {
  href: string
  title: string
  content: string
  thumbnail: string
  publishedAt?: string
  tag: string[]
}

const Component: React.FCX<Props> = (props) => {
  return (
    <Link href={props.href}>
      <a className={props.className}>
        <div className={`${props.className}__thumbnail place-holder-loading`}>
          <Img
            src={props.thumbnail}
            width={313}
            height={265}
            alt={props.title}
            layout="fill"
            nextImageProps={{
              objectFit: 'cover',
              priority: true,
              loading: 'eager'
            }}
          />
        </div>
        <div className={`${props.className}__content`}>
          <h4 className={`${props.className}-title`}>{props.title}</h4>
          <div className={`${props.className}-texts`}>
            {/* {getPreviewOfContent(props.content, 80)} */}
          </div>
          {props.publishedAt && (
            <time className={`${props.className}-date`}>
              {dayjs(props.publishedAt).format('YYYY/MM/DD')}
            </time>
          )}
          <TagsWrapper>
            {props.tag?.map((t) => (
              <Tag key={t} title={t} color={getTagColor(t)} />
            ))}
          </TagsWrapper>
        </div>
      </a>
    </Link>
  )
}

const StyledComponent = styled(Component)`
  &__thumbnail {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;

    ${mq('sp_wide')} {
      height: 200px;
    }

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
    padding: 8px 0;
  }

  &-title {
    font-size: 1.8rem;
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
  }
`

export const PostCard = StyledComponent
