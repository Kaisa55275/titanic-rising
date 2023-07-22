import React from "react"
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa"
import { IconType } from "react-icons"
import Link from "next/link"
import Image from "next/image"
import { css } from "@kuma-ui/core"

type Props = {
  spotifySrc?: string
  appleMusicSrc?: string
  youtubeSrc?: string
  imageSrc?: string
  className?: string
}

export const MusicLink: React.FC<Props> = (props) => {
  const lists: [IconType, string][] = [
    [FaSpotify, props.spotifySrc || ""],
    [FaApple, props.appleMusicSrc || ""],
    [FaYoutube, props.youtubeSrc || ""],
  ]

  return (
    <div className={styles.root}>
      <Image
        className={styles.image}
        src={props.imageSrc || ""}
        width={100}
        height={100}
        alt="artwork"
      />
      <strong className={styles.title}>Listen On:</strong>
      <div className={styles.list}>
        {lists.map((li) => {
          const Icon = li[0]
          return (
            <span className="list-item" key={li[1]}>
              {li[1] ? (
                <Link href={li[1]}>
                  <Icon width={30} height={30} />
                </Link>
              ) : null}
            </span>
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  root: css`
    width: 100%;
    max-width: 300px;
    margin: 20px auto;
    `,
  title: css`
    font-size: 1.2rem;
    margin: 8px auto;
    display: block;
    text-align: center;
    `,
  image: css`
    width: 100%;
    height: auto;
  `,
  list: css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    padding-left: 0;

    .list-item {
      &::before {
        display: none;
      }

      > a {
        display: block;
        width: 30px;
        margin: 0 10px;

        > svg {
          width: 30px;
          height: 30px;
          color: black;
        }
      }
    }
  `,
}
