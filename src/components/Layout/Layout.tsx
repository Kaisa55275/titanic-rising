import React from 'react'
import { Wrapper } from '../Wrapper'
import { GlobalStyle } from 'src/assets/styles/globalStyle'
import { Header } from '../Header'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normal } from 'src/assets/styles/theme'
import { useAmp } from 'next/amp'
import dynamic from 'next/dynamic'
import { utils } from 'src/assets/styles/utils'
import { RecoilRoot, RecoilRootProps } from 'recoil'

const AmpAnalytics = dynamic(() =>
  import('../Analytics').then((d) => d.AmpAnalytics)
)

const UtilsStyle = createGlobalStyle`${utils}`

type Props = Pick<RecoilRootProps, 'initializeState'>

const Component: React.FCX<Props> = (props) => {
  const isAmp = useAmp()

  return (
    <div className={props.className}>
      <RecoilRoot initializeState={props.initializeState}>
        {isAmp && <AmpAnalytics />}
        <ThemeProvider theme={normal}>
          <GlobalStyle />
          {!isAmp && <UtilsStyle />}
          <Header />
          <Wrapper>{props.children}</Wrapper>
        </ThemeProvider>
      </RecoilRoot>
    </div>
  )
}

const StyledComponent = styled(Component)`
  h1 {
    text-align: center;
  }
`

export const Layout = StyledComponent
