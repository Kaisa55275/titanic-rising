/* eslint-disable react/jsx-props-no-spreading */
import { useAmp } from 'next/amp'
import React from 'react'
import styled from 'styled-components'

type Props = {
  src: string
  width: number
  height: number
  layout?: string
  sandbox?: string
  frameBorder?: number
  allowFullScreen?: boolean
}

const Component: React.FCX<Props> = (props) => {
  const isAmp = useAmp()

  if (isAmp) {
    return (
      <div className={`${props.className}-container`}>
        <amp-iframe
          sandbox="allow-scripts allow-same-origin"
          className={props.className}
          src={props.src}
          width={props.width}
          height={props.height}
          layout={props.layout || 'responsive'}
          frameborder={props.frameBorder}
        />
      </div>
    )
  }

  return (
    <div className={`${props.className}-container`}>
      <iframe
        className={props.className}
        src={props.src}
        width={props.width}
        height={props.height}
        frameBorder={props.frameBorder}
        allowFullScreen={props.allowFullScreen}
      />
    </div>
  )
}

const StyledComponent = styled(Component)`
  &-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    margin-bottom: 50px;
  }

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

export const IFrame = StyledComponent
