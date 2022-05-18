import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div
        className='bg-black flex-col text-end h-screen text-white'
      >
        <h1>Home page</h1>
      </div>
    </>
  )
}

export default Home