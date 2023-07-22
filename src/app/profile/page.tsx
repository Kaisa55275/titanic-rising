import { css } from "@kuma-ui/core"
import { ProfileContent } from "./_components/content"
import { ProfileIcons } from "./_components/icons"

export const metadata = {
  title: "Profile | Daiki Nimura",
}

export default function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.h1}>Daiki Nimura</h1>
      <ProfileContent />
      <ProfileIcons />
    </div>
  )
}

const styles = {
  root: css`
    width: 90%;
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  h1: css`
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 10px;
  `,
}
