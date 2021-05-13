import React from 'react'
import { GA_UA_ID } from 'src/lib/constants'

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

export const AmpAnalytics = Component
