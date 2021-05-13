import { google } from 'googleapis'
import { NextApiRequest, NextApiResponse } from 'next'
import { VIEW_ID } from 'src/lib/constants'
import credentials from './keys.json'

const getClient = async (): ReturnType<typeof google.auth.getClient> => {
  return google.auth.getClient({
    credentials,
    scopes: 'https://www.googleapis.com/auth/analytics.readonly'
  })
}

const getTopArticlesFromGoogle = async () => {
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

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const resultsFromAnalytics = await getTopArticlesFromGoogle().catch((err) => {
    throw new Error(err)
  })
  resultsFromAnalytics
    ? res.status(200).send(resultsFromAnalytics)
    : res.status(500)
}
