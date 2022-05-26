import { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Chart from '../components/home/Chart'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='h-screen bg-black text-white text-center flex justify-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className='pt-10 text-5xl'>Welcome to the Best Crypto Platform.</h1>
          <Chart />
        </motion.div>
      </div>
    </>
  )
}

export default Home