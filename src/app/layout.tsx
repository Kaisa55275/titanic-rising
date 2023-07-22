import { css } from "@kuma-ui/core"
import "./normalize.css"
import { Header } from "./_components/header"
import { KumaRegistry } from "@kuma-ui/next-plugin/registry"

export const metadata = {
  title: "Titanic Rising",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={styles.html}>
      <body>
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
  body: css`
  `,
}
