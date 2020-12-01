import React from 'react'
import styled from 'styled-components'
import { fonts } from 'src/assets/styles/variable'

const Component: React.FCX = (props) => {
  return <h1 className={props.className}>{props.children}</h1>
}

const StyledComponent = styled(Component)`
  ${fonts.roboto}
  font-size: 3rem;
  display: block;
  letter-spacing: 0.02em;
`
export const H1 = StyledComponent
