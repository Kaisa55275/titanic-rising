import { useAmp } from 'next/amp'
import React from 'react'
import styled from 'styled-components'
import Image, { ImageProps } from 'next/image'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  layout?: string
  nextImageProps?: Partial<ImageProps> & {
    layout?: 'fixed' | 'intrinsic' | 'responsive' | undefined
  }
}

const Component: React.FCX<Props> = (props) => {
  const isAmp = useAmp()
  const src = props.src.startsWith('//') ? 'https:' + props.src : props.src

  if (isAmp) {
    return (
      <amp-img
        className={props.className}
        src={src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        layout={props.layout || 'responsive'}
      />
    )
  }

  if (props.src.startsWith('data:image')) {
    return (
      <img
        className={props.className}
        width={props.width}
        height={props.height}
        src={src}
        alt={props.alt}
      />
    )
  }

  if (props.layout === 'fill') {
    return (
      <Image
        src={src}
        alt={props.alt}
        loading={props.nextImageProps?.loading || 'lazy'}
        objectFit={props.nextImageProps?.objectFit}
        layout="fill"
      />
    )
  }

  return (
    <div
      className={[
        props.className,
        `${props.className}--next_image`,
        'next-image-container'
      ].join(' ')}
    >
      <Image
        src={src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        loading={props.nextImageProps?.loading || 'lazy'}
        layout={props.nextImageProps?.layout || 'responsive'}
        {...props.nextImageProps}
      />
    </div>
  )
}

const StyledComponent = styled(Component)`
  width: 100%;
  height: auto;
`

export const Img = StyledComponent
