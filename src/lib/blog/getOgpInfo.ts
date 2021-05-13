import axios from 'axios'
import { JSDOM, VirtualConsole } from 'jsdom'

interface IInfoRes {
  type: string
  title: string
  image: string
  description: string
  url: string
  site_name: string
  'fb:admins': number
  favicon?: string
}

const extractHostname = (url: string) => {
  let hostname: string
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf('//') > -1) {
    hostname = url.split('/')[2]
  } else {
    hostname = url.split('/')[0]
  }

  hostname = hostname.split(':')[0]
  hostname = hostname.split('?')[0]

  return hostname
}

export type OgpInfo = IInfoRes | null

export const getOgpInfo = async (url: string) => {
  if (typeof url !== 'string') {
    throw new Error('invalid url')
  }
  try {
    const responce = await axios.get(encodeURI(url))

    const data = responce.data

    const virtualConsole = new VirtualConsole()

    const dom = new JSDOM(data, {
      runScripts: 'dangerously',
      virtualConsole
    })

    const meta = dom.window.document.head.querySelectorAll('meta')

    const getFavicon = () => {
      const faviconHref = dom.window.document
        .querySelector('link[rel~="icon"]')
        ?.getAttribute('href')

      if (!faviconHref) {
        return null
      }

      const concat =
        url?.endsWith('/') && faviconHref?.startsWith('/')
          ? faviconHref.split('/')[1]
          : faviconHref

      const favicon = concat?.startsWith('http') ? concat : url + concat

      return favicon
    }

    // metaからOGPを抽出し、JSON形式に変換する
    const ogp = Array.from(meta)
      .filter((element) => element.hasAttribute('property'))
      .reduce((pre, ogp) => {
        const property = ogp.getAttribute('property').trim().replace('og:', '')
        const content = ogp.getAttribute('content')
        pre[property] = content
        return pre
      }, {}) as OgpInfo

    const title = dom.window.document.querySelector('title').innerHTML

    const val = { ...ogp, url: extractHostname(url), favicon: getFavicon() }

    val.title = title

    return val
  } catch {
    return null
  }
}
