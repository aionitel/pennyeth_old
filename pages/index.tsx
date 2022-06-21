import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Chart from '../components/home/Chart'
import fetchDailyBtc from '../utils/fetchDailyBtc'
import fetchCurrEth from '../utils/fetchCurrEth'
import fetchCurrBtc from '../utils/fetchCurrBtc'
import { useRecoilState } from 'recoil'
import { CurrBtcAtom } from '../state/atoms'
import { CurrEthAtom } from '../state/atoms'

const Home: NextPage = ({ dailyBtc, fetchedBtcPrice, fetchedEthPrice }: any) => {
  const [currBtcPrice, setCurrBtcPrice] = useRecoilState(CurrBtcAtom)
  const [currEthPrice, setCurrEthPrice] = useRecoilState(CurrEthAtom)

  useEffect(() => {
    setCurrBtcPrice(fetchedBtcPrice)
    setCurrEthPrice(fetchedEthPrice)
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
          <div className='flex'>
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
  const fetchedEthPrice = await fetchCurrEth();
  const fetchedBtcPrice = await fetchCurrBtc();

  return {
    props: {
      dailyBtc,
      fetchedBtcPrice,
      fetchedEthPrice
    }
  }
}

export default Home