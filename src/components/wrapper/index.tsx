import React from 'react'
import styled from 'styled-components'

const Component: React.FCX = (props) => {
  return <div className={props.className}>{props.children}</div>
}

const StyledComponent = styled(Component)`
  margin: 0 auto;
  width: 90%;
  max-width: 900px;
`

export const Wrapper = StyledComponent
