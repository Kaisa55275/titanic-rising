import { getOgpInfo, OgpInfo } from './getOgpInfo'

export type BookMarkInfo = OgpInfo[]

export const getBookMarkInfo = async (content: string) => {
  const regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g // ']))/;

  let match: RegExpExecArray
  const matches = []
  while ((match = regexp_url.exec(content)) !== null) {
    matches.push(match[1])
  }

  const urlArr = matches.map((m) => m.split(')')[0]).filter((u) => !!u)

  const requests = urlArr.map(async (ur) =>
    getOgpInfo(ur).catch(() => {
      throw new Error(`error fetching ogp from ${ur}`)
    })
  )

  const infos = (await Promise.all(requests)).filter((item) => item)

  return infos
}
