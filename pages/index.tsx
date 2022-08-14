import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import HomeChart from '../components/chart/HomeChart'
import dynamic from 'next/dynamic'
import Collection from '../components/price/Collection'
import fetchNews from '../data/news/fetchNews'
import fetchAssetMetrics from '../data/prices/misc/fetchAssetData'
import fetchWeeklyBtc from '../data/prices/btc/fetchWeeklyBtc'
import { useRecoilValue } from 'recoil'
import { assetMetricsAtom, weeklyBtcAtom } from '../state/atoms'

// size of bitcoin logo in header 
const btcIconSize = 45;

// type for news article that will be displayed
interface NewsArticleProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

interface AssetProps {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
}

const Home: NextPage = () => {
  // dynamically import certain components that do data fetching stuff without ssr
  const DynamicNewsCarousel = dynamic(() => import('../components/news/NewsCarousel'), {ssr: false})
  const DynamicBtcText = dynamic(() => import("../components/price/BtcText"), {ssr: false})

  // get global asset data from recoil
  const assetData = useRecoilValue(assetMetricsAtom);

  // get weekly timeseries btc data
  const weeklyBtc = useRecoilValue(weeklyBtcAtom);

  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='flex bg-black text-white'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className='lg:mr-20 lg:pr-20'>
            <div className='text-2xl lg:text-2xl text-center lg:text-left lg:ml-6 my-8'>
              <a href='https://bitcoin.org/bitcoin.pdf' rel="noopener noreferrer" target='_blank'>
                <img src='https://i.imgur.com/wbZ6UVD.png' height={btcIconSize} width={btcIconSize} alt='main-btc' className='inline mb-2' />
              </a>
              <h1 className='inline lg:ml-2 lg:mr-2 ml-1 mr-1'>is</h1>
              <DynamicBtcText />
              <h1 className='inline'> today.</h1>
            </div>
          </div>
          <div className='lg:flex lg:mt-4 mt-10'>
            <HomeChart data={weeklyBtc} type='BTC' />
            <div className='flex-row hidden lg:inline'>
            </div>
          </div>
          <div className='border-2 border-lightgray border-dashed rounded ml-7 mr-7'>
            <div className='flex justify-between my-4 ml-2'>
              <h1 className='ml-2'>Name</h1>
              <h1>Price</h1>
              <h1>24h %</h1>
              <h1 className='mr-20'>Volume(24h)</h1>
              <h1 className='pr-6'>Market Cap</h1>
            </div>
          </div>
          <div>
            <h1 className='ml-7 my-6 text-2xl'>Latest Crypto News</h1>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Home;