import { css } from 'styled-components'

export const blogStyles = css`
  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2.4rem;
    margin-top: 50px;
    @media screen and (max-width: 601px) {
      margin-top: 36px;
    }
  }

  h3 {
    font-size: 2rem;
    margin-top: 40px;
    @media screen and (max-width: 601px) {
      margin-top: 32px;
    }
  }

  h4 {
    font-size: 1.8rem;
    margin-top: 40px;
    @media screen and (max-width: 601px) {
      margin-top: 32px;
    }
  }

  p,
  b {
    font-size: 1.8rem;
    line-height: 200%;
    margin-top: 32px;
    margin-bottom: 32px;
    @media screen and (max-width: 601px) {
      font-size: 1.6rem;
      line-height: 180%;
    }
  }

  b {
    font-weight: bold;
  }

  a {
    display: inline;
    color: gray;
    text-decoration: underline;
  }

  .heading-index {
    direction: block;
  }

  img,
  amp-img {
    display: block;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }

  ul,
  ol {
    list-style: inside;
    li {
      margin-bottom: 13px;
      p {
        display: inline;
      }
    }
  }

  ol,
  ul {
    counter-reset: li;
    padding-left: 6px;
    margin-left: 15px;
    list-style: none;

    li {
      font-size: 1.8rem;
      position: relative;
      @media screen and (max-width: 601px) {
        font-size: 1.6rem;
      }
      &::before {
        counter-increment: li;
        content: counter(li);
        position: absolute;
        font-size: 1.8rem;
        left: -25px;
        width: 1.6rem;
        text-align: center;
        @media screen and (max-width: 601px) {
          font-size: 1.6rem;
        }
      }
      p {
        &::before {
          content: '.';
          position: absolute;
          left: -8px;
          /* top: 2px; */
          display: inline-block;
        }
      }
    }
  }

  code {
    font-size: 1.6rem;
    @media screen and (max-width: 601px) {
      font-size: 1.4rem;
      top: -1px;
    }
  }

  ul {
    li {
      &::before {
        content: '・';
      }
      p::before {
        content: '';
      }
    }
  }

  video {
    width: 100%;
  }

  .fixed-container {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: auto;
  }

  amp-img img {
    object-fit: contain;
  }

  iframe {
    object-fit: contain;
  }

  .asset-wrapper {
    > iframe {
      object-fit: initial;
    }
  }
  blockquote {
    position: relative;
    padding: 30px 15px;
    box-sizing: border-box;
    font-style: italic;
    background: #efefef;
    border-left: 3px solid #5e5e5e;
    color: #5e5e5e;
    font-size: 1.6rem;
    line-height: 200%;
    margin-top: 32px;
    margin-bottom: 32px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    @media screen and (max-width: 601px) {
      font-size: 1.4rem;
      line-height: 180%;
    }
  }
`
