import fetch from 'node-fetch'
import { TopArticles } from 'types/data/topArticles'
import { BASE_URL, VIEW_ID } from '../config'

export const getTopArticles = async () => {
  if (!VIEW_ID) {
    return []
  }

  const res = await fetch(BASE_URL + '/api/analytics/top_article').catch(
    (err) => {
      console.error(err)
      throw new Error(err)
    }
  )

  if (res.ok) {
    const data: TopArticles = await res.json()
    return data
  }

  const data = await res.json()

  throw new Error(data)
}
