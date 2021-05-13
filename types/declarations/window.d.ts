interface IGa {
  gtag: (
    type: string,
    name: string,
    params: string | { [key: string]: unknown }
  ) => void
}
declare global {
  interface Window extends IGa {
    liff: Liff
    workbox: Workbox
  }
}

export default window
