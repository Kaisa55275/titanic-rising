import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Layout } from 'src/components/Layout'
import { Top } from 'src/components/Top'
import { Head } from 'src/components/Head'
import { getTopImages } from 'src/lib/cloudinary/getTopImages'
import { StyledComponentPropsWithRef } from 'styled-components'

type Props = Pick<StyledComponentPropsWithRef<typeof Top>, 'topImages'>

const IndexPage: NextPage<Props> = (props) => {
  return (
    <div className="top-page">
      <Head />
      <Layout>
        <Top topImages={props.topImages} />
      </Layout>
    </div>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps<Props> = async () => {
  const topImagesRes = await getTopImages()
  const topImages = topImagesRes.resources.map((res) => ({
    width: res.width,
    height: res.height,
    url: res.url,
    alt: res.filename
  }))

  return {
    props: {
      topImages
    },
    revalidate: 10
  }
}

export const config = {
  amp: 'hybrid'
}
