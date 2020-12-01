import { google } from 'googleapis'

export const getClient = async (): ReturnType<typeof google.auth.getClient> =>
  google.auth.getClient({
    keyFile: './keys.json',
    scopes: 'https://www.googleapis.com/auth/analytics.readonly'
  })
