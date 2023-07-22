import Image from "next/image"
import { getMarkDownPosts } from "./_lib/get-markdown-posts"
import { css } from "@kuma-ui/core"
import Link from "next/link"
import dayjs from "dayjs"
import { Metadata } from "next"

export const revalidate = false

export const metadata: Metadata = {
  title: "Blog | Daiki Nimura",
}

export default async function Page() {
  const posts = await getMarkDownPosts()

  return (
    <div className={styles.root}>
      {posts.map((post) => {
        return (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className={styles.post}>
              <span className={styles.image}>
                <Image src={post.data.ogp} alt={post.data.title} fill />
              </span>
              <div className={styles.content}>
                <h2 className={styles.title}>{post.data.title}</h2>
                <p className={styles.date}>{dayjs(`${post.data.date}`).format("YYYY/MM/DD")}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

const styles = {
  root: css`
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 0;
  `,
  post: css`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  `,
  title: css`
    font-size: 1.4rem;
    font-weight: bold;
    width: calc(100% - 120px);
    margin-bottom: 8px;
  `,
  date: css`
    font-size: 1.2rem;
    color: #666;
  `,
  content: css`
    padding: 10px;
    width: 100%;
  `,
  image: css`
    width: 140px;
    height: 90px;
    margin-right: 10px;
    position: relative;
    overflow: hidden;

    > img {
      object-fit: cover;
    }
  `,
}
