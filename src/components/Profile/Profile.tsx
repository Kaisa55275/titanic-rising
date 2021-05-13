import React from 'react'
import styled from 'styled-components'
import { ProfileIcons, ProfileContent } from '.'
import { Title } from 'src/components/Title'

const Component: React.FCX = (props) => {
  return (
    <div className={props.className}>
      <Title>Profile</Title>
      <div className={`${props.className}__text`}>
        <h2>Daiki Nimura</h2>
        <ProfileContent />
        <ProfileIcons />
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  h1 {
    margin: 20px auto;
    text-align: center;
  }

  h2 {
    font-size: 1.6rem;
    display: block;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 10px;
  }
`

export const Profile = StyledComponent
