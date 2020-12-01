import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  slug: string
  color: string
  title: string
}

const Tag: React.FCX<Props> = (props) => {
  const getBlackOrWhite = (hexcolor: string) => {
    const r = parseInt(hexcolor.substr(1, 2), 16)
    const g = parseInt(hexcolor.substr(3, 2), 16)
    const b = parseInt(hexcolor.substr(5, 2), 16)

    return (r * 299 + g * 587 + b * 114) / 1000 < 140 ? 'white' : 'black'
  }

  return (
    <Link
      key={props.slug}
      href={{ pathname: '/blog', query: { tag: props.slug } }}
    >
      <a
        className={props.className}
        style={{
          backgroundColor: props.color,
          color: `${getBlackOrWhite(props.color || '#ffffff')}`
        }}
      >
        {props.title}
      </a>
    </Link>
  )
}

export default styled(Tag)`
  font-size: 1.2rem;
  padding: 0 7px;
  margin: 4px 0px;
  margin-left: 5px;
  height: 24px;
  line-height: 22px;
  display: block;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: underline;
`
export const TagsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`
