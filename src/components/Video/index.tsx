import { useAmp } from 'next/amp'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'
import { AMPVideo } from './index.amp'

type Props = {
  src: string
} & ComponentProps<typeof AMPVideo>

const Component: React.FCX<Props> = (props) => {
  const isAmp = useAmp()

  return (
    <div className={props.className}>
      {isAmp ? (
        <AMPVideo
          width={props.width}
          height={props.height}
          src={props.src}
          layout={props.layout}
          poster={props.poster}
        />
      ) : (
        <video className={`${props.className}__content`} src={props.src}>
          {props.children}
        </video>
      )}
    </div>
  )
}

const StyledComponent = styled(Component)``

export const Video = StyledComponent
