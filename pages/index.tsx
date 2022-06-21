import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Chart from '../components/home/Chart'
import fetchDailyBtc from '../utils/fetchDailyBtc'
import Image from 'next/image'

const Home: NextPage = ({ dailyBtc }: any) => {

  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='flex justify-center bg-black h-screen w-screen text-white'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className='mt-10 lg:text-5xl text-xl my-2 mx-2'>Welcome to the Best Crypto Platform.</h1>
          <div className='flex'>
            <Image src='https://i.imgur.com/wbZ6UVD.png' height={20} width={20} alt='main-btc' />
            <h1>Bitcoin is    </h1>
            {dailyBtc < 0 ? <h1 className='text-red'>down %{dailyBtc}</h1> : <h1 className='text-green-500'>up %{dailyBtc}</h1>}
            <h1>today.</h1>
          </div>
          <Chart />
        </motion.div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const dailyBtc = await fetchDailyBtc();

  return {
    props: {
      dailyBtc
    }
  }
}

export default Home