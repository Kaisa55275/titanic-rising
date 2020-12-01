import dayjs from 'dayjs'
import { useAmp } from 'next/amp'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { Post } from 'types/data/blog'
import { TopArticles as TopArticlesType } from 'types/data/topArticles'

type Props = {
  topArticles: TopArticlesType
  posts: Post[]
}

const TopArticles: React.FCX<Props> = (props) => {
  const isAmp = useAmp()

  return (
    <ul className={props.className}>
      {!props.topArticles.length && <div>No Articles Available</div>}
      {props.topArticles?.map((topArticle) => {
        const article = props.posts.find((a) => {
          topArticle.path.includes(a.slug)
        })

        return (
          <li
            key={topArticle.path}
            className={`${props.className}__item`}
            data-path={topArticle.path}
            data-count={topArticle.count}
          >
            <Link href="/blog/[slug]" as={topArticle.path}>
              <a className={`${props.className}-link`}>
                <div className={`${props.className}-link__thumb`}>
                  {isAmp ? (
                    <div
                      className="amp-img-container"
                      style={{
                        backgroundImage: `url("${
                          article?.ogp || require('src/assets/images/tr.jpg')
                        }")`
                      }}
                    />
                  ) : (
                    <img
                      src={article?.ogp || require('src/assets/images/tr.jpg')}
                      alt={article?.title}
                    />
                  )}
                </div>
                <span className={`${props.className}-link__info`}>
                  <time>{dayjs(article?.date).format('YYYY-MM-DD')}</time>
                  <strong>{article?.title}</strong>
                </span>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default styled(TopArticles)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 60px;

  & > li {
    width: 32%;
    @media screen and (max-width: 600px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }

  &-link {
    width: 100%;

    &__thumb {
      height: 120px;
      overflow: hidden;

      .amp-img-container {
        background-repeat: no-repeat;
        width: 100%;
        height: 120px;
        background-size: cover;
      }
    }

    &__info {
      display: block;
      padding: 10px 10px;

      > time {
        font-size: 1.2rem;
        display: block;
        margin-bottom: 6px;
      }

      > strong {
        font-size: 1.4rem;
        display: block;
      }
    }
  }
`
