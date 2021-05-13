import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { gaPageView } from 'src/lib/google/analytics/event'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    gaPageView(router.asPath)
  }, [router.asPath])

  return <Component {...pageProps} />
}

export default App
