import { NextApiRequest, NextApiResponse } from 'next'
import { google } from 'googleapis'
import { getMarkDownPosts } from 'src/lib/blog/getMarkdownPosts'
import { VIEW_ID } from 'src/lib/config'

const getClient = async (): ReturnType<typeof google.auth.getClient> => {
  const credentials = require('./keys.json')
  return google.auth.getClient({
    credentials,
    scopes: 'https://www.googleapis.com/auth/analytics.readonly'
  })
}

const getTopArticles = async () => {
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

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const [topArticles, articles] = await Promise.all([
    getTopArticles(),
    getMarkDownPosts()
  ]).catch((err) => {
    throw new Error(err)
  })

  if (topArticles && articles) {
    const targetRows = topArticles.reports?.[0].data.rows

    const topArticlesObj = targetRows
      .map((val) => {
        const article = articles.find((article) =>
          val.dimensions[0].includes(article.slug)
        )

        let path = val.dimensions[0].includes('#')
          ? val.dimensions[0].split('#')[0]
          : val.dimensions[0].split('?')[0]

        if (path.endsWith('.amp')) {
          path = path.split('.amp')[0]
        }

        const count = Number(val.metrics[0].values[0])

        return {
          article,
          path,
          count
        }
      })
      .filter(Boolean)
      .filter((f) => !f.article?.data?.draft)
      .filter(
        (element, index, self) =>
          self.findIndex(
            (e) => e.path === element.path && e.article === element.article
          ) === index
      )
      .filter((val) => val.path.includes('/blog/') && !val.path.includes('__'))
      .sort((a, b) => b.count - a.count)

    if (topArticlesObj.length > 3) {
      topArticlesObj.length = 3
    }

    res.status(200).send(topArticlesObj)

    return
  }

  res.send(204)
}

export default handler
