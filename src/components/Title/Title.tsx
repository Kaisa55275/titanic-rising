import React from 'react'
import styled from 'styled-components'
import { fontFamily } from 'src/assets/styles/variable'

const Component: React.FCX = (props) => {
  return <h1 className={props.className}>{props.children}</h1>
}

const StyledComponent = styled(Component)`
  ${fontFamily.roboto}
  display: block;
  font-size: 2rem;
  display: block;
  letter-spacing: 0.02em;
  margin-bottom: 20px;
`
export const Title = StyledComponent
