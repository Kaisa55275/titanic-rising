import { css } from 'styled-components'

export const reset = css`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: none;
    background: none;
  }

  li {
    list-style: none;
  }

  a,
  button {
    color: #000;
    text-decoration: none;
    transition: 0.3s;
    cursor: pointer;
    -webkit-appearance: none;
  }

  a {
    display: block;
  }

  a:hover,
  button:hover,
  a:focus,
  button:focus {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
  }

  *:focus {
    outline: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  picture {
    display: block;
  }

  img {
    width: 100%;
    vertical-align: bottom;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  input,
  button,
  textarea,
  select {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type='submit'],
  input[type='button'] {
    border-radius: 0;
    // -webkit-box-sizing: content-box;
    // -webkit-appearance: button;
    // appearance: button;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    &::-webkit-search-decoration {
      display: none;
    }
    &:focus {
      outline-offset: -2px;
    }
  }

  textarea {
    resize: none;
  }
`
