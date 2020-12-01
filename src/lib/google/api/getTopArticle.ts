/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { google } from 'googleapis'
import { getClient } from './client'

const VIEW_ID = '229218776'

export const getTopArticle = async () => {
  const client = await getClient()
  const analyticsreporting = google.analyticsreporting({
    version: 'v4',
    auth: client
  })

  const res = await analyticsreporting.reports.batchGet({
    requestBody: {
      reportRequests: [
        {
          viewId: VIEW_ID,
          dateRanges: [
            {
              startDate: '30daysAgo',
              endDate: 'today'
            }
          ],
          dimensions: [
            {
              name: 'ga:pagePath'
            }
          ],
          metrics: [
            {
              expression: 'ga:pageviews'
            }
          ]
        }
      ]
    }
  })
  return res.data
}
