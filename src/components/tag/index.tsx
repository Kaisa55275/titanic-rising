import React from 'react'
import styled from 'styled-components'

type Props = {
  color: string
  title: string
}

const Component: React.FCX<Props> = (props) => {
  const getBlackOrWhite = (hexcolor: string) => {
    const r = parseInt(hexcolor.substr(1, 2), 16)
    const g = parseInt(hexcolor.substr(3, 2), 16)
    const b = parseInt(hexcolor.substr(5, 2), 16)

    return (r * 299 + g * 587 + b * 114) / 1000 < 140 ? 'white' : 'black'
  }

  return (
    <span
      className={props.className}
      style={{
        backgroundColor: props.color,
        color: `${getBlackOrWhite(props.color || '#ffffff')}`
      }}
    >
      {props.title}
    </span>
  )
}

const StyledComponent = styled(Component)`
  font-size: 1.2rem;
  padding: 0 7px;
  margin: 4px 0px;
  margin-right: 5px;
  height: 24px;
  line-height: 22px;
  display: block;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: underline;
`

export const Tag = StyledComponent

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
