import React, { useEffect } from 'react'
import { Wrapper } from '../wrapper'
import { GlobalStyle } from 'src/assets/styles/globalStyle'
import { useRouter } from 'next/router'
import { logEvent } from 'src/lib/firebase/analytics'

const Layout: React.FC = (props) => {
  const router = useRouter()
  useEffect(() => {
    logEvent('router_change', {
      url: router.route,
      query: JSON.stringify(router.query)
    })
  }, [router.route, router.query])

  return (
    <div className="layout">
      <GlobalStyle />
      <Wrapper>{props.children}</Wrapper>
    </div>
  )
}

export default Layout
