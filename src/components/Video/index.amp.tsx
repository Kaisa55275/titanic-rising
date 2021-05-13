/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'

type Props = {
  src: string
  width?: number
  height?: number
  layout?: string
  poster?: string
}

const Component: React.FC<Props> = (props) => {
  return <amp-video {...props} />
}

export const AMPVideo = Component
