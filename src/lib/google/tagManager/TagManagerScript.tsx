import React from 'react'

export const Tag: React.FC = () => (
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=UA-175239146-1"
  />
)

export const Config: React.FC = () => (
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
)
