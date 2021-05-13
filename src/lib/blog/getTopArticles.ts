import { TopArticles } from 'types/data/topArticles'
import { analyticsreporting_v4 } from 'googleapis'
import { getMarkDownPosts } from './getMarkdownPosts'
import axios from 'axios'
import { BASE_URL } from '../constants'

const getTopArticlesFromApi = async () => {
  const res = await axios
    .get<analyticsreporting_v4.Schema$GetReportsResponse>(
      BASE_URL + '/api/v1/top_articles'
    )
    .catch((err) => {
      throw new Error(err)
    })

  return res.data
}

export const getTopArticles = async () => {
  const [topArticles, articles] = await Promise.all([
    getTopArticlesFromApi(),
    getMarkDownPosts()
  ]).catch((err) => {
    throw new Error(err)
  })

  const targetRows = topArticles.reports?.[0].data.rows

  const topArticlesObj: TopArticles = targetRows
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
    .filter((val) => val.path.includes('/blog/') && !val.path.includes('test'))
    .sort((a, b) => b.count - a.count)

  if (topArticlesObj.length > 3) {
    topArticlesObj.length = 3
  }

  return topArticlesObj || []
}
