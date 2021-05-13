import React from 'react'
import { logEvent } from 'src/lib/firebase/analytics'
import styled from 'styled-components'

const Component: React.FCX = (props) => {
  return (
    <div className={props.className}>
      <div className={`${props.className}__text`}>
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
    </div>
  )
}

const StyledComponent = styled(Component)`
  &__text {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 20px;
    line-height: 150%;

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

export const ProfileContent = StyledComponent
