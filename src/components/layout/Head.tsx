import React from 'react'
import NextHead from 'next/head'
import { useAmp } from 'next/amp'
import { BASE_URL } from 'src/lib/config'

type Props = {
  title?: string
  ogImage?: string
  noIndex?: boolean
}

const Head: React.FC<Props> = (props) => {
  const { children, title } = props
  const isAmp = useAmp()
  return (
    <>
      <NextHead>
        <meta name="application-name" content="Titanic Rising" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Titanic Rising" />
        <meta name="description" content="にむらのブログ" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="description" content="にむらのブログ" />
        <meta property="og:site_name" content="Titanic Rising" />
        <meta property="og:title" content={title || 'Titanic Rising'} />
        <meta property="og:description" content="にむらのブログ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@traehruoylooc" />
        <meta
          property="og:image"
          content={props.ogImage || `${BASE_URL}/images/tr.jpg`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_URL} />
        <meta name="theme-color" content="#000000" />
        {props.noIndex ? (
          <meta name="robots" content="noindex, follow" />
        ) : (
          <meta name="robots" content="index, follow" />
        )}
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple-touch-icon.png"
          sizes="180x180"
        />
        <title>{title || 'Titanic Rising'}</title>
        {!isAmp && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-175239146-1"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-175239146-1');
                `
              }}
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
            />
          </>
        )}
        {children}
      </NextHead>
    </>
  )
}

export default Head
