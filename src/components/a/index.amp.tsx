import { useRouter } from 'next/router'
import React, { ComponentPropsSC } from 'react'
import { A } from '.'
import * as q from 'querystring'

type Props = ComponentPropsSC<typeof A>

const Component: React.FCX<Props> = (props) => {
  const { className, to, children, query = {} } = props
  const router = useRouter()

  const queryToPass = q.stringify({
    ...query,
    from_amp_page: '1',
    amp_router_pathname: router.pathname,
    amp_router_asPath: router.asPath
  })

  return (
    <a
      href={`${to}?${queryToPass}`}
      className={`${className} amp-a`}
      id={props.id}
    >
      {children}
    </a>
  )
}

export const AmpA = Component
