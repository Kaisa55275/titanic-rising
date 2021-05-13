import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { fontFamily } from 'src/assets/styles/variable'

type Props = {
  title?: string
  css?: ReturnType<typeof css>
}

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Profile', page: '/profile' }
]

const Component: React.FCX<Props> = (props) => {
  const { pathname } = useRouter()

  const isActive = (path: string) => {
    if (pathname.includes(path)) {
      if (path === '/') {
        return path === pathname
      }
      return pathname.includes(path)
    }
  }

  return (
    <header className={props.className}>
      <ul className={`${props.className}-menu`}>
        {navItems.map(({ label, page, link }) => (
          <li key={label} className={`${props.className}-menu__item`}>
            {page ? (
              <Link href={page}>
                <a
                  className={[
                    isActive(page) ? 'active' : undefined,
                    `${props.className}-anchor`
                  ].join(' ')}
                >
                  {label}
                </a>
              </Link>
            ) : (
              <a
                className="link-external"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

const StyledComponent = styled(Component)`
  display: block;
  height: 56px;
  text-align: center;
  margin-bottom: 30px;

  &-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &__item {
      margin: 0 14px;

      > a {
        ${fontFamily.roboto}
        letter-spacing: 0.02em;
        font-size: 1.8rem;
        color: #5e5e5e;

        &.active {
          color: #000000;
          font-weight: bold;
          position: relative;

          &::after {
            content: '';
            height: 2px;
            width: 120%;
            background-color: #000000;
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translate(-50%);
          }
        }
      }
    }
  }

  ${(props) => props.css}
`
export const Header = StyledComponent
