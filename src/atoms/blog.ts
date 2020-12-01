import { atom } from 'recoil'
import { fetchStatus, FetchStatus } from 'types/data/fetchStatus'
import { TopArticles } from 'types/data/topArticles'

export type BlogState = {
  topArticles: TopArticles
  draftAuth: {
    status: FetchStatus
    value: boolean
  }
}

const initialState: BlogState = {
  topArticles: null,
  draftAuth: {
    status: fetchStatus.UNFETCHED,
    value: null
  }
}

export const blogState = atom({
  key: 'blog',
  default: initialState
})
