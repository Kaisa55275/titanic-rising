import React from 'react'
import { FaGithub, FaSpotify } from 'react-icons/fa'
import styled from 'styled-components'

const externalLinks = [
  {
    href: 'https://github.com/Kaisa55275',
    icon: FaGithub
  },
  {
    href: 'https://open.spotify.com/user/nimu26-mp4?si=WIG5o8auRU-foUES6fWUvA',
    icon: FaSpotify
  }
]

const ProfileIcons: React.FCX = (props) => {
  return (
    <div className={props.className}>
      {externalLinks.map((link) => (
        <a
          key={link.href}
          className={`${props.className}__icon`}
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

export default styled(ProfileIcons)`
  display: flex;
  justify-content: center;
  align-items: center;

  &__icon {
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
  }
`
