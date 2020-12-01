type EventActionType = 'send'
type EventPointType = 'cv'
type EventTypeName = 'CustomEvent' | 'Conversion'
type EventTypeOptions = {
  type: EventTypeName
}

interface ILineAd {
  _lt: (
    eventActionType: EventActionType,
    eventPointType: EventPointType,
    eventTypeOptions: EventTypeOptions,
    ids: string[]
  ) => void
}

declare global {
  type _lt = ILineAd['_lt']
}

interface IGa {
  // ga: (
  //   type: string,
  //   name: string,
  //   params: string | { [key: string]: unknown }
  // ) => void

  gtag: (
    type: string,
    name: string,
    params: string | { [key: string]: unknown }
  ) => void
}
interface IFullstoryInstance {
  event: (
    eventName: string,
    options?: { [key: string]: string | number }
  ) => void

  identify: (uid: string, params: { [key: string]: string | number }) => void

  setUserVars: (params: { [key: string]: string | number }) => void
}

interface IFullStory {
  FS: IFullstoryInstance
}

interface IFacebookPixel {
  fbq: (eventType: EventType, eventName: string, options?: Options) => void
}

declare global {
  interface Window extends IFullStory, IFacebookPixel, ILineAd, IGa {
    liff: Liff
    workbox: Workbox
  }
}

export default window
