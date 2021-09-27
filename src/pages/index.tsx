import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Layout from '~/layouts/default'
import HomePage from '~/components/HomePage'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SEO Tech</title>
      </Head>
      <Layout>
        <div className="flex flex-col items-center justify-center w-full h-screen font-poppins">
          <HomePage />
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Home
