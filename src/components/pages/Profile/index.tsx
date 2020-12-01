import React from 'react'
import styled from 'styled-components'
import { logEvent } from 'src/lib/firebase/analytics'
import ProfileIcons from './ProfileIcons'
import { H1 } from 'src/components/h/H1'

const Profile: React.FCX = (props) => {
  return (
    <div className={props.className}>
      <H1>Profile</H1>
      <div className={`${props.className}__text`}>
        <strong>Daiki Nimura</strong>
        <p>
          loves{` `}
          <a
            href="https://open.spotify.com/artist/3Uqu1mEdkUJxPe7s31n1M9"
            target="_blank"
            rel="noreferrer"
            onClick={(): void => {
              logEvent('clickWeyesBloodLink')
            }}
          >
            Weyes Blood
          </a>
        </p>
        <p>
          frontend engineer{` `}
          <a
            href="https://smooth.jp?nimura=99"
            onClick={(): void => {
              logEvent('clickSmoothLink')
            }}
          >
            @smooth_inc
          </a>
        </p>
      </div>
      <div
        className={`${props.className}__text ${props.className}__text--section_contact`}
      >
        <b>contact</b>
        <a
          href="mailto:d.nimura@smooth.jp"
          target="_blank"
          rel="noreferrer"
          onClick={(): void => {
            logEvent('clickMail')
          }}
        >
          d.nimura@smooth.jp
        </a>
      </div>
      <ProfileIcons />
    </div>
  )
}

export default styled(Profile)`
  h1 {
    margin: 20px auto;
    text-align: center;
  }

  &__text {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 20px;
    line-height: 150%;
    strong {
      font-size: 1.6rem;
      display: block;
      margin-bottom: 10px;
    }
    a {
      display: inline;
      text-decoration: underline;
    }

    &--section_contact {
      display: flex;
      flex-direction: column;
    }
  }
`
