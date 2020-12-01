/* eslint-disable @typescript-eslint/ban-ts-comment */
const isServer = typeof window === 'undefined'
const GA_ID = 'UA-175239146-1'

export const gaPageView = (path: string): void => {
  if (isServer) {
    return
  }
  // @ts-ignore
  window.gtag('config', GA_ID, {
    page_path: path
  })
  // @ts-ignore
  window.gtag('event', 'screenView', { path })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const gaLogEvent = (
  eventName: string,
  eventParams: { [key: string]: string }
): void => {
  if (isServer) {
    return
  }

  // @ts-ignore
  window.gtag('event', eventName, eventParams)
}
