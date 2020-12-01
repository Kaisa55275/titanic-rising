import { css } from 'styled-components'

export const base = css`
  html {
    font-size: 62.5%; // 1rem=10px
  }

  body {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans JP', 'Noto Sans', 'Hiragino Sans',
      'ヒラギノ角ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3',
      sans-serif;
    font-style: normal;
    font-weight: 300;
    -webkit-font-hiccosying: antialiased;
    color: #0d2930;
  }

  input,
  textarea {
    font-family: 'Noto Sans JP', 'Noto Sans', 'Hiragino Sans',
      'ヒラギノ角ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3',
      sans-serif;
    font-style: normal;
  }

  *::selection {
    background-color: #000; /* Safari */
    color: #fff;
  }

  *::-moz-selection {
    background-color: #000; /* Safari */
    color: #fff;
  }
`
