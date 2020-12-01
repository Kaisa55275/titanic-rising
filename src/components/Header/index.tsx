import React from 'react'
import Link from 'next/link'
import ExtLink from 'src/components/shared/ext-link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { fonts } from 'src/assets/styles/variable'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Profile', page: '/profile' }
]

const Header: React.FCX = (props) => {
  const { pathname } = useRouter()

  return (
    <header className={props.className}>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default styled(Header)`
  display: block;
  min-height: 64px;
  padding: 40px 0;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;

    li {
      ${fonts.roboto}
      letter-spacing: 0.02em;
      font-size: 1.8rem;
      margin: 0 10px;
    }
  }
`
