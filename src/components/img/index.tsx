import { useAmp } from 'next/amp'
import React, { ComponentProps } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  layout?: string
} & Pick<ComponentProps<typeof Image>, 'loading'>

const Component: React.FCX<Props> = (props) => {
  const isAmp = useAmp()
  if (isAmp) {
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <amp-img
        className={props.className}
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        layout={props.layout || 'responsive'}
      />
    )
  }

  if (props.src.startsWith('data:image')) {
    return <img className={props.className} src={props.src} alt={props.alt} />
  }

  return (
    <Image
      className={props.className}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      loading={props.loading || 'lazy'}
    />
  )
}

const StyledComponent = styled(Component)``

export const Img = StyledComponent
