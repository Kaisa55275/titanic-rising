export const fetchStatus = {
  UNFETCHED: 'UNFETCHED',
  FETCHING: 'FETCHING',
  FETCHED: 'FETCHED'
} as const

export type FetchStatus = keyof typeof fetchStatus
