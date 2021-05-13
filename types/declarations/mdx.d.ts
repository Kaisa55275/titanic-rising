/// <reference types="@mdx-js/loader" />
/// <reference types="@mdx-js/react" />

declare module '*.mdx'

declare module '@mdx-js/react' {
  const MDXProvider: <P extends Record<string, unknown>>(
    props: P
  ) => React.FunctionComponentElement<React.ProviderProps<unknown>>
}
