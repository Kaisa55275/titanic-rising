import React, { useEffect } from 'react'
import 'katex/dist/katex.css'
import Footer from 'src/components/shared/footer'
import { AppProps } from 'next/app'
import { NextPage } from 'next'
import { echoMovies } from 'src/lib/modules/weyesBlood'
import { useRouter } from 'next/router'
import { gaPageView } from 'src/lib/google/analytics/event'
import { RecoilRoot } from 'recoil'

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    gaPageView(router.asPath)
  }, [router.asPath])

  useEffect(() => {
    echoMovies()
  }, [])

  return (
    // 追加
    <RecoilRoot>
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  )
}

export default App
