import React from 'react'
import styled from 'styled-components'
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { A } from '../A'
import { Img } from '../Img'

type Props = {
  spotifySrc?: string
  appleMusicSrc?: string
  youtubeSrc?: string
  imageSrc?: string
}

const Component: React.FCX<Props> = (props) => {
  const lists: [IconType, string][] = [
    [FaSpotify, props.spotifySrc],
    [FaApple, props.appleMusicSrc],
    [FaYoutube, props.youtubeSrc]
  ]

  return (
    <div className={props.className}>
      <div className={`${props.className}__image`}>
        <Img src={props.imageSrc} width={100} height={100} alt="artwork" />
      </div>
      <strong className={`${props.className}__title`}>Listen On:</strong>
      <div className={`${props.className}__list`}>
        {lists.map((li) => {
          const Icon = li[0]
          return (
            <span className="list-item" key={li[1]}>
              {li[1] ? (
                <A to={li[1]}>
                  <Icon width={30} height={30} />
                </A>
              ) : null}
            </span>
          )
        })}
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  max-width: 300px;
  margin: 20px auto;

  &__title {
    font-size: 1.2rem;
    margin: 8px auto;
    display: block;
    text-align: center;
  }

  &__list {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-left: 0;
    padding-left: 0;

    .list-item {
      &::before {
        display: none;
      }

      > a {
        display: block;
        width: 30px;
        color: #000000;
        margin: 4px 10px;

        > svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`

export const MusicLink = StyledComponent
