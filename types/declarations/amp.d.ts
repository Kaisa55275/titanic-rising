import * as React from 'react'

interface BaseAttributes {
  className?: string
  id?: string
  style?: React.CSSProperties
}

interface BaseAttributesX {
  className?: string
  id?: string
  children?: React.ReactNode
}

interface AMPImageElement extends BaseAttributes {
  layout?: string
  width: number
  height: number
  src: string
  alt?: string
}

interface AMPBodyElement extends BaseAttributes {
  children?: React.ReactNode
}

interface AMPSideBar extends BaseAttributes {
  layout: 'nodisplay'
  side: 'left' | 'right'
  children?: React.ReactNode
}

interface AMPCarousel extends BaseAttributesX {
  width: number
  height: number
  layout: 'responsive'
  type: 'slides'
  autoplay?: boolean
  delay: number
  role: 'region'
  'aria-label'?: 'string'
}

interface AMPAnalytics extends BaseAttributesX {
  type: string
  'data-credentials': string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-img': React.DetailedHTMLProps<AMPImageElement, HTMLElement>
      'amp-body': React.DetailedHTMLProps<AMPBodyElement, HTMLElement>
      'amp-sidebar': React.DetailedHTMLProps<AMPSideBar, HTMLElement>
      'amp-carousel': React.DetailedHTMLProps<AMPCarousel, HTMLElement>
      'amp-analytics': React.DetailedHTMLProps<AMPAnalytics, HTMLElement>
    }
  }
}
