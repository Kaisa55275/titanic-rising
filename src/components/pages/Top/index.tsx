import React from 'react'
import { A } from 'src/components/a'
import { H1 } from 'src/components/h/H1'
import { Img } from 'src/components/img'
import styled from 'styled-components'

const Top: React.FCX = (props) => {
  return (
    <div className={props.className}>
      <H1>Titanic Rising</H1>
      <div className={`${props.className}__img`}>
        <Img
          src={require('src/assets/images/tr.jpg')}
          alt="titanic rising"
          width={804}
          height={457}
        />
      </div>
      <small className={`${props.className}__info`}>
        ただのにむらのブログです。
        <A to="/blog">記事一覧</A>
      </small>
    </div>
  )
}

export default styled(Top)`
  h1 {
    margin: 20px auto;
    text-align: center;
  }

  &__img {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  &__info {
    font-size: 1.5rem;
    display: block;
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
    > * {
      display: inline-block;
    }
    > a {
      text-decoration: underline;
    }
  }
`
