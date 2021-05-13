import { css } from 'styled-components'

export type Css = ReturnType<typeof css>

const breakPoints = {
  wide: 1279,
  normal: 1200,
  medium: 1001,
  tab: 801,
  sp_wide: 601,
  sp: 481,
  sp_min: 321
} as const

export const font = (size: number): Css =>
  css`
    font-size: ${size / 10}rem;
  `

export const ls = (size: number): Css =>
  css`
    letter-spacing: ${size / 1000}em;
  `

export const lh = (size: number): Css =>
  css`
    line-height: ${size / 10}rem;
  `

export const mq = (size?: keyof typeof breakPoints): string => `
  @media screen and (max-width: ${breakPoints[size || 'normal']}px)
`
export const mq_min = (size?: keyof typeof breakPoints): string => `
  @media screen and (min-width: ${breakPoints[size || 'normal']}px)
`

export const ma = css`
  margin-left: auto;
  margin-right: auto;
`

export const color = {
  main: '#6EC3D8',
  darkSkyblue: '#34A5C1',
  lightNavy: '#277C91',
  red: '#EE8476',
  yellow: '#EECC76',
  black: '#0D2930',
  darkBlue: '#0D2930',
  darkGray: '#7E9094',
  gray: '#e5e5e5',
  mediumLightGray: '#E1E9EB',
  lightGray: '#F2F6F7',
  gradationRed: `linear-gradient(90deg, #F9A296 0%, #EE8476 100%)`,
  gradationBlue: `linear-gradient(90deg, #86D0E2 0%, #6EC3D8 100%)`
} as const

export const fontFamily = {
  nuito: css`
    font-family: 'Nunito', 'Open Sans', sans-serif;
  `,
  roboto: css`
    font-family: 'Roboto', 'Open Sans', sans-serif;
  `,
  notoJp: css`
    font-family: 'Noto Sans JP', 'Noto Sans', 'Hiragino Sans',
      'ヒラギノ角ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3',
      sans-serif;
  `
} as const
