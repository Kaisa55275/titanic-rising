import React, { memo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useAmp } from 'next/amp'
import { AmpA } from './index.amp'

type Props = {
  to: string
  query?: { [key: string]: string }
  onClick?: () => void
  id?: string
  scroll?: boolean
  type?: 'button'
}

const Component: React.FCX<Props> = memo((props) => {
  const { className, to, children, query = {} } = props
  const isAmp = useAmp()

  if (isAmp) {
    return <AmpA {...props} />
  }

  return (
    <Link
      href={{
        pathname: to,
        query,
        hash: typeof window !== 'undefined' ? window?.location.hash : undefined
      }}
      scroll={props.scroll}
    >
      <a href={to} className={className} onClick={props.onClick} id={props.id}>
        {children}
      </a>
    </Link>
  )
})

const StyledComponent = styled(Component)`
  text-decoration: none;
`
export const A = StyledComponent
