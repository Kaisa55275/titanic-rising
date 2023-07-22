"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { css } from "@kuma-ui/core"

type Props = {
  title?: string
}

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Blog", page: "/blog" },
  { label: "Profile", page: "/profile" },
]

export const Header: React.FC<Props> = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (pathname.includes(path)) {
      if (path === "/") {
        return path === pathname
      }
      return pathname.includes(path)
    }
  }

  return (
    <header className={styles.root}>
      <div className={styles.menu}>
        {navItems.map(({ label, page, link }) => (
          <span key={label} className={styles.menuItem}>
            {page ? (
              <Link href={page} className={isActive(page) ? "active" : ""}>
                {label}
              </Link>
            ) : (
              <a className="link-external" href={link} target="_blank" rel="noreferrer">
                {label}
              </a>
            )}
          </span>
        ))}
      </div>
    </header>
  )
}

const styles = {
  root: css`
    display: block;
    height: 56px;
    text-align: center;
    margin-bottom: 30px;
    `,
  menu: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    `,

  menuItem: css`
    margin: 0 14px;

    > a {
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
  `,
}
