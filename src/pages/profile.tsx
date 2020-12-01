import React from 'react'
import Layout from 'src/components/layout'
import Head from 'src/components/layout/Head'
import Profile from 'src/components/pages/Profile'
import { NextPage } from 'next'
import Header from 'src/components/Header'

const ProfilePage: NextPage = () => (
  <>
    <Head title="Profile | Titanic Rising" />
    <Layout>
      <Header />
      <Profile />
    </Layout>
  </>
)

export default ProfilePage
