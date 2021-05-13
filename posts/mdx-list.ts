import dynamic from 'next/dynamic'
type MDXPostsType = { [key: string]: React.ComponentType }
export const MDXPosts: MDXPostsType = {
  'about-amp': dynamic(() => import('posts/docs/about-amp.mdx')),
  'about-zenn-dev': dynamic(() => import('posts/docs/about-zenn-dev.mdx')),
  'all-my-friends': dynamic(() => import('posts/docs/all-my-friends.mdx')),
  'best-album-2020': dynamic(() => import('posts/docs/best-album-2020.mdx')),
  'book-smart': dynamic(() => import('posts/docs/book-smart.mdx')),
  'bump-is-good': dynamic(() => import('posts/docs/bump-is-good.mdx')),
  'changed-blog-domain': dynamic(
    () => import('posts/docs/changed-blog-domain.mdx')
  ),
  'city-liverpool-2020-1': dynamic(
    () => import('posts/docs/city-liverpool-2020-1.mdx')
  ),
  'city-lyon': dynamic(() => import('posts/docs/city-lyon.mdx')),
  'contentful-extension': dynamic(
    () => import('posts/docs/contentful-extension.mdx')
  ),
  'costa-coffee': dynamic(() => import('posts/docs/costa-coffee.mdx')),
  'created-notion-blog': dynamic(
    () => import('posts/docs/created-notion-blog.mdx')
  ),
  'fix-uiself': dynamic(() => import('posts/docs/fix-uiself.mdx')),
  'ghost-of-tsushima-yabai': dynamic(
    () => import('posts/docs/ghost-of-tsushima-yabai.mdx')
  ),
  'gmb-pitchfork': dynamic(() => import('posts/docs/gmb-pitchfork.mdx')),
  'honban-hanei-da': dynamic(() => import('posts/docs/honban-hanei-da.mdx')),
  'how-to-vw': dynamic(() => import('posts/docs/how-to-vw.mdx')),
  'installed-recoil': dynamic(() => import('posts/docs/installed-recoil.mdx')),
  'ldd-liff': dynamic(() => import('posts/docs/ldd-liff.mdx')),
  'nextjs-mdx': dynamic(() => import('posts/docs/nextjs-mdx.mdx')),
  'notion-blog-tag': dynamic(() => import('posts/docs/notion-blog-tag.mdx')),
  'popular-article': dynamic(() => import('posts/docs/popular-article.mdx')),
  'style-titanic-blog': dynamic(
    () => import('posts/docs/style-titanic-blog.mdx')
  ),
  'test-mdx': dynamic(() => import('posts/docs/test-mdx.mdx')),
  'tym-concert': dynamic(() => import('posts/docs/tym-concert.mdx')),
  'vue-liff': dynamic(() => import('posts/docs/vue-liff.mdx')),
  'why-typescript': dynamic(() => import('posts/docs/why-typescript.mdx')),
  'write-gas-in-ts': dynamic(() => import('posts/docs/write-gas-in-ts.mdx')),
  'yakiniku-king': dynamic(() => import('posts/docs/yakiniku-king.mdx'))
}
