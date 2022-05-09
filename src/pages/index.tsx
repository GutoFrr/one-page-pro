/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Head from 'next/head'
import Menu from '../components/menu'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>One Page Pro</title>
      </Head>

      <Menu />
    </div>
  )
}

export default Home
