import React from 'react'
import { NextPage } from 'next'
import Layout from 'src/components/layout'
import Head from 'src/components/layout/Head'
import Top from 'src/components/pages/Top'
import Header from 'src/components/Header'

const IndexPage: NextPage = () => {
  return (
    <>
      <Head />
      <Layout>
        <Header />
        <Top />
      </Layout>
    </>
  )
}

export default IndexPage
