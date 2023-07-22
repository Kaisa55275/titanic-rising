import { css } from "@kuma-ui/core"
import React from "react"

export const ProfileContent: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <p>
          loves{` `}
          <a
            href="https://open.spotify.com/artist/3Uqu1mEdkUJxPe7s31n1M9"
            target="_blank"
            rel="noreferrer"
          >
            Weyes Blood
          </a>
        </p>
        <p>
          engineer{` `}
          <a href="https://kodansha.tech/ja">@KODANSHAtech LLC.</a>
        </p>
      </div>
      <div className={[styles.text, styles.contact].join(" ")}>
        <b>contact</b>
        <a href="mailto:d.nimura@titanicrising.jp" target="_blank" rel="noreferrer">
          d.nimura@titanicrising.jp
        </a>
      </div>
    </div>
  )
}

const styles = {
  root: css`
    font-size: 1.4rem;
  `,
  text: css`
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 20px;
    line-height: 150%;

    a {
      display: inline;
      text-decoration: underline;
    }
  `,
  contact: css`
    display: flex;
    flex-direction: column;
  `,
}
