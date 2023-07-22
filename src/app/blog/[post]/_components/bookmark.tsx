import React from "react"
import { FaExternalLinkAlt, FaGlobeAsia } from "react-icons/fa"
import { JSDOM, VirtualConsole } from "jsdom"
import { css } from "@kuma-ui/core"

export type BookMarkInfo = OgpInfo[]

type Props = {
  href: string
  title?: string
}

type ReadOgpInfo = {
  type: string
  title: string
  image: string
  description: string
  url: string
  site_name: string
  "fb:admins": number
  favicon?: string
}

const extractHostname = (url: string) => {
  let hostname: string

  if (url.indexOf("//") > -1) {
    hostname = url.split("/")[2]
  } else {
    hostname = url.split("/")[0]
  }

  hostname = hostname.split(":")[0]
  hostname = hostname.split("?")[0]

  return hostname
}

export type OgpInfo = ReadOgpInfo | null

const getOgpInfo = async (url: string) => {
  try {
    const response = await fetch(encodeURI(url))

    const data = await response.text()

    const virtualConsole = new VirtualConsole()

    const dom = new JSDOM(data, {
      runScripts: "dangerously",
      virtualConsole,
    })

    const meta = dom.window.document.head.querySelectorAll("meta")

    const getFavicon = () => {
      const faviconHref = dom.window.document
        .querySelector('link[rel~="icon"]')
        ?.getAttribute("href")

      if (!faviconHref) {
        return null
      }

      const concat =
        url?.endsWith("/") && faviconHref?.startsWith("/") ? faviconHref.split("/")[1] : faviconHref

      const favicon = concat?.startsWith("http") ? concat : url + concat

      return favicon
    }

    const ogp = Array.from(meta)
      .filter((element) => element.hasAttribute("property"))
      .reduce((pre, ogp) => {
        const property = ogp
          .getAttribute("property")
          ?.trim()
          .replace("og:", "") as keyof ReadOgpInfo
        const content = ogp.getAttribute("content")
        return {
          ...pre,
          [property]: content,
        }
      }, {} as ReadOgpInfo)

    const title = dom.window.document.querySelector("title")?.innerHTML

    const val = { ...ogp, url: extractHostname(url), favicon: getFavicon() }

    val.title = title || val.title

    return val
  } catch (e) {
    console.error(`error fetching ogp from ${url}`)
    return null
  }
}

export const BookMark: React.FC<Props> = async (props) => {
  const info = await getOgpInfo(props.href)

  if (!info) {
    return <a href={props.href}>{props.title}</a>
  }

  return (
    <a href={props.href} className={`bookmark ${styles.root}`} target="_blank" rel="noreferrer">
      <div className={styles.info}>
        <div className="body">
          <strong className="title">
            {info.title || info.url}
            <FaExternalLinkAlt />
          </strong>
          <p className="desc">{info?.description}</p>
          <span className="url">
            {info.favicon ? (
              <img width={12} height={12} src={info.favicon} alt={""} />
            ) : (
              <FaGlobeAsia className="faglobe" />
            )}
            {info.url}
          </span>
        </div>
        <div className="thumb">
          {info.image && <img width={100} height={100} src={info.image} alt={info.site_name} />}
        </div>
      </div>
    </a>
  )
}

const styles = {
  root: css`
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    margin: 20px 0;
    color: #000000;
  `,
  info: css`
      display: flex;
    justify-content: space-between;

    > .thumb {
      overflow: hidden;
      width: 30%;
      position: relative;

      img {
        object-fit: cover;
        box-shadow: none;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        height: 100%;
        width: auto;

        @media screen and (max-width: 768px)  {
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    > .body {
      padding: 16px;
      width: auto;
      width: 68%;
      color: #000000;

      > .title {
        font-size: 1.4rem;
        line-height: 130%;
        margin-bottom: 10px;
        display: block;

        > svg {
          margin-left: 6px;
          width: 12px;
          height: 12px;
          display: inline-block;
        }
      }

      > .url {
        display: block;
        font-size: 1rem;
        text-decoration: none;
        line-height: 130%;
        position: relative;
        line-height: 10px;
        padding-left: 16px;

        img,
        svg {
          width: 12px;
          height: 12px;
          box-shadow: none;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      > .desc {
        display: block;
        margin: 0;
        font-size: 1.2rem;
        margin-bottom: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  `,
}
