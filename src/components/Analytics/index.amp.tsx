import React from 'react'

const GA_UA_ID = 'UA-175239146-1'

const Component: React.FC = () => {
  const analyticsConfig = {
    vars: {
      gtag_id: GA_UA_ID,
      config: {
        [GA_UA_ID]: { groups: 'default' }
      }
    }
  }

  return (
    <amp-analytics type="gtag" data-credentials="include">
      <script
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(analyticsConfig)
        }}
      />
    </amp-analytics>
  )
}

export const AmpAnalyticsComponent = Component
