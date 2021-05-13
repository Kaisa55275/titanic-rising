import React from 'react'
import { Layout } from 'src/components/Layout'
import { Head } from 'src/components/Head'
import { Profile } from 'src/components/Profile'
import { NextPage } from 'next'

const ProfilePage: NextPage = () => (
  <div className="profile-page">
    <Head title="Profile | Titanic Rising" />
    <Layout>
      <Profile />
    </Layout>
  </div>
)

export default ProfilePage
