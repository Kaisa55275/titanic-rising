/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { StyledComponent, StyledComponentProps } from 'styled-components'

declare module 'react' {
  type FCX<P = {}> = React.FunctionComponent<P & { className?: string }>
  type ExtractStyledComponentProps<SC> = SC extends StyledComponent<
    infer C,
    infer T,
    infer O,
    infer A
  >
    ? StyledComponentProps<C, T, O, A> & {
        as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
        forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
      }
    : never
  type ComponentPropsSC<C> = C extends StyledComponent<any, any, any, any>
    ? ExtractStyledComponentProps<C>
    : React.ComponentProps<C>
}

declare module 'next' {
  export type NextPageX<P = {}> = NextPage<P> & {
    Container?: Container
  }
  export type PageContainer = React.FC | React.FCX
}
