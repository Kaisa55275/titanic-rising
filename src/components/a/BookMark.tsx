import React from 'react'
import styled from 'styled-components'
import { FaExternalLinkAlt } from 'react-icons/fa'

type Props = {
  href?: string
  title?: string
  text?: string
}

const BookMark: React.FCX<Props> = (props) => {
  return (
    <a
      href={props.href}
      className={`${props.className} bookmark`}
      target="_blank"
      rel="noreferrer"
    >
      <strong className={`${props.className}__title`}>
        <span>{props.title}</span>
        <FaExternalLinkAlt />
      </strong>
      <span className={`${props.className}__text`}>{props.text}</span>
      <small className={`${props.className}__link`}>{props.href}</small>
    </a>
  )
}

export default styled(BookMark)`
  &.bookmark {
    text-decoration: none;
    border: 1px solid #e5e5e5;
    display: block;
    padding: 16px;
    border-radius: 3px;
    margin: 20px 0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    > strong {
      font-size: 1.6rem;
      color: #000;
      display: block;
      margin-bottom: 6px;
      font-weight: normal;
      display: flex;
      justify-content: left;
      align-items: center;
      @media screen and (max-width: 601px) {
        font-size: 1.4rem;
      }

      > span {
        margin-right: 8px;
        width: 90%;
      }

      > svg {
        width: 12px;
        height: 12px;
      }
    }
    > span {
      font-size: 1.4rem;
      display: block;
      margin-bottom: 6px;
      @media screen and (max-width: 601px) {
        font-size: 1.2rem;
      }
    }
    > small {
      font-size: 1.2rem;
      display: block;
      color: #000;
      width: 100%;
      word-wrap: break-word;
      @media screen and (max-width: 601px) {
        font-size: 1rem;
      }
    }
  }
`
