import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import HomeChart from '../components/home/HomeChart'
import fetchDailyBtc from '../utils/fetchDailyBtc'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { CurrBtcAtom } from '../state/atoms'
import fetchWeeklyBtc from '../utils/fetchWeeklyBtc'

interface HomeProps {
  dailyBtc: number,
  weeklyBtc: {
    name: string,
    BTC: number
  }
}

const Home: NextPage<HomeProps> = ({ dailyBtc, weeklyBtc }) => {
  const btcIconSize = 32;

  const currBtcPrice = useRecoilValue(CurrBtcAtom);

  console.log(weeklyBtc);

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
          <div className='flex justify-center my-5'>
            <Image src='https://i.imgur.com/wbZ6UVD.png' height={btcIconSize} width={btcIconSize} alt='main-btc' />
            <span className='flex'>
              <h1 className='mt-1 mx-1'>Bitcoin is</h1>
              {
                dailyBtc < 0 ? <h1 className='mt-1 mr-1 text-red'>down {dailyBtc}%</h1> : <h1 className='mt-1 mr-1 text-green-400'>up {dailyBtc}%</h1>
              }
              <h1 className='mt-1'> today.</h1>
            </span>
          </div>
          <h1 className='visible lg:hidden text-center'>At a current trading price of ${currBtcPrice}.</h1>
          <HomeChart weeklyBtc={weeklyBtc} />
        </motion.div>
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const dailyBtc = await fetchDailyBtc();
  const weeklyBtc = await fetchWeeklyBtc();

  return {
    props: {
      dailyBtc,
      weeklyBtc
    }
  }
}

export default Home