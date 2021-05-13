import React from 'react'
import styled from 'styled-components'
import { FaExternalLinkAlt, FaGlobeAsia } from 'react-icons/fa'
import { BookMarkInfo } from 'src/lib/blog/getBookmarkInfo'
import { useAmp } from 'next/amp'
import { mq } from 'src/assets/styles/variable'

type Props = {
  href?: string
  title?: string
  text?: string
  info?: BookMarkInfo[number]
  key?: string
}

const Component: React.FCX<Props> = (props) => {
  const isAmp = useAmp()

  if (!props.info) {
    return <a>{props.text}</a>
  }

  return (
    <a
      href={props.href}
      className={`${props.className} bookmark`}
      target="_blank"
      rel="noreferrer"
    >
      <div className={`${props.className}__info`}>
        <div className="body">
          <strong className="title">
            {props.info.title || props.info.url}
            <FaExternalLinkAlt />
          </strong>
          <p className="desc">{props.info?.description}</p>
          <span className="url">
            {props.info?.favicon ? (
              isAmp ? (
                <amp-img
                  width={12}
                  height={12}
                  src={props.info.favicon}
                  alt={''}
                />
              ) : (
                <img width={12} height={12} src={props.info.favicon} alt={''} />
              )
            ) : (
              <FaGlobeAsia className="faglobe" />
            )}
            {props.info.url}
          </span>
        </div>
        <div className="thumb">
          {props.info?.image &&
            (isAmp ? (
              <amp-img
                width={100}
                height={100}
                src={props.info.image}
                alt={props.info.site_name}
              />
            ) : (
              <img
                width={100}
                height={100}
                src={props.info.image}
                alt={props.info.site_name}
              />
            ))}
        </div>
      </div>
    </a>
  )
}

const StyledComponent = styled(Component)`
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin: 20px 0;
  color: #000000;

  &__info {
    display: flex;
    justify-content: space-between;

    > .thumb {
      overflow: hidden;
      width: 30%;
      position: relative;

      img,
      amp-img {
        box-shadow: none;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        height: 100%;
        width: auto;

        ${mq('sp_wide')} {
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    > .body {
      padding: 16px;
      width: auto;
      width: 68%;
      color: #000000;

      > .title {
        font-size: 1.4rem;
        line-height: 130%;
        margin-bottom: 10px;
        display: block;

        > svg {
          margin-left: 6px;
          width: 12px;
          height: 12px;
        }
      }

      > .url {
        display: block;
        font-size: 1rem;
        text-decoration: none;
        line-height: 130%;
        position: relative;
        line-height: 10px;
        padding-left: 16px;

        img,
        amp-img,
        svg {
          width: 12px;
          height: 12px;
          box-shadow: none;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      > .desc {
        display: block;
        margin: 0;
        font-size: 1.2rem;
        margin-bottom: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
`
export const BookMark = StyledComponent
