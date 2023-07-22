import { css } from "@kuma-ui/core"
import "./normalize.css"
import { Header } from "./_components/header"
import { KumaRegistry } from "@kuma-ui/next-plugin/registry"
import { Noto_Sans_JP } from "next/font/google"

export const metadata = {
  title: "Titanic Rising",
  icons: [
    {
      url: "/favicons/favicon.ico",
      rel: "icon",
    },
  ],
}

const NotoSansJp = Noto_Sans_JP({
  display: "swap",
  weight: ["400", "700"],
  style: "normal",
  subsets: ["cyrillic"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={styles.html}>
      <body className={NotoSansJp.className}>
        <KumaRegistry>
          <Header />
          {children}
        </KumaRegistry>
      </body>
    </html>
  )
}

const styles = {
  html: css`
    font-size: 62.5%;
  `,
}
