import React from 'react'
import { A } from 'src/components/A'
import { Img } from 'src/components/Img'
import { Title } from 'src/components/Title'
import styled from 'styled-components'

type Props = {
  topImages: {
    url: string
    width: number
    height: number
    alt: string
  }[]
}

const Component: React.FCX<Props> = (props) => {
  return (
    <div className={props.className}>
      <Title>Titanic Rising</Title>
      <strong className={`${props.className}__name`}>by Daiki Nimura</strong>
      <div className={`${props.className}__enter`}>
        <A to="/blog">Enter</A>
      </div>
      <h2 className={`${props.className}__snap-title`}>My PokémonSnap™ Pics</h2>
      <ul className={`${props.className}-slides`}>
        {props.topImages.map((img) => (
          <li key={img.url} className={`${props.className}-slides__item`}>
            <Img
              src={img.url}
              width={img.width}
              height={img.height}
              alt={img.alt}
            />
          </li>
        ))}
      </ul>
      <small className={`${props.className}__copyright`}>
        ©2021 Pokémon. ©1995-2021 Nintendo/Creatures Inc./GAME FREAK inc.
      </small>
    </div>
  )
}

const StyledComponent = styled(Component)`
  > h1 {
    margin-bottom: 4px;
  }
  > small,
  > h2 {
    display: block;
    text-align: center;
    margin-bottom: 10px;
  }

  &__name {
    font-size: 1.2rem;
    font-weight: normal;
    display: block;
    text-align: center;
    margin-bottom: 12px;
  }

  &__copyright {
    font-size: 1rem;
  }

  &__snap-title {
    font-size: 1.4rem;
  }

  &__enter {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;

    > a {
      font-size: 1.8rem;
      line-height: 18px;
      height: 24px;
      border: 1px solid #000000;
      width: 100px;
      text-align: center;
    }
  }
  &-slides__item {
    margin-bottom: 20px;
  }
`

export const Top = StyledComponent
