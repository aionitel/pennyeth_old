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
        className='bg-black text-white flex justify-center h-screen'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='my-4 text-3xl'
        >
          <h1>A Crypto Dashboard for Everyone.</h1>
        </motion.div>
      </div>
    </>
  )
}

export default Home