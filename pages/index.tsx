import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Chart from '../components/home/Chart'
import fetchDailyBtc from '../utils/fetchDailyBtc'

const Home: NextPage = () => {
  const [dailyBtc, setDailyBtc] = useState<string>();

  const fetchBtcPercent = async () => {
    await fetchDailyBtc().then(btc => setDailyBtc(btc));
  }

  useEffect(() => {
    fetchBtcPercent();
  })

  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='bg-black h-screen text-white text-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className='pt-10 text-5xl'>Welcome to the Best Crypto Platform.</h1>
          <h1>Bitcoin is up {dailyBtc}% today.</h1>
          <Chart />
        </motion.div>
      </div>
    </>
  )
}

export default Home