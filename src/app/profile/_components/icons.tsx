import { css } from "@kuma-ui/core"
import React from "react"
import { FaGithub, FaSpotify, FaTwitter } from "react-icons/fa"

const externalLinks = [
  {
    href: "https://open.spotify.com/user/nimu26-mp4?si=WIG5o8auRU-foUES6fWUvA",
    icon: FaSpotify,
  },
  {
    href: "https://github.com/Kaisa55275",
    icon: FaGithub,
  },
  {
    href: "https://twitter.com/26Nanokayo",
    icon: FaTwitter,
  },
  {
    href: "https://youtrust.jp/users/0033db39a64d98470073631d89da620f",
    icon: () => (
      <img
        src="/images/youtrust.png"
        style={{
          width: "20px",
          height: "20px",
          paddingBottom: "3px",
        }}
      />
    ),
  },
]

export const ProfileIcons: React.FC = () => {
  return (
    <div className={styles.root}>
      {externalLinks.map((link) => (
        <a
          key={link.href}
          className={styles.icon}
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          <link.icon />
        </a>
      ))}
    </div>
  )
}

const styles = {
  root: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  icon: css`
    transition: 0.2s;
    margin: 0 8px;
    &:hover {
      transform: scale(1.2);
      opacity: inherit;
    }

    > svg {
      width: 20px;
      height: 20px;
    }
  `,
}
