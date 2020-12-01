import { GetStaticPropsContext } from 'next'

export const getPostSlug = (ctx: GetStaticPropsContext) => {
  const cutAmp = (slug: string) => {
    if (slug.includes('.amp')) {
      return slug.split('.amp')[0]
    }
    return slug
  }
  if (ctx.params.post instanceof Array) {
    return cutAmp(ctx.params.post[0])
  }
  return cutAmp(ctx.params.post)
}
