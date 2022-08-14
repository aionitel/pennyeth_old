import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRecoilState, useRecoilValue } from 'recoil'
import { WeeklyBtcAtom, WeeklyEthAtom } from '../state/atoms'
import HomeChart from '../components/chart/HomeChart'
import dynamic from 'next/dynamic'
import Collection from '../components/price/Collection'
import fetchNews from '../data/news/fetchNews'
import fetchAssetMetrics from '../data/prices/misc/fetchAssetData'
import fetchWeeklyBtc from '../data/prices/btc/fetchWeeklyBtc'

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

interface HomeProps {
  newsData: NewsArticleProps[],
  weeklyBtc: [],
  btcData: AssetProps,
  ethData: AssetProps,
  xmrData: AssetProps,
  solData: AssetProps,
  adaData: AssetProps,
}

const Home: NextPage<HomeProps> = ({ newsData, weeklyBtc, btcData, ethData, xmrData, solData, adaData }) => {
  // dynamically import news carousel without ssr in order for it to work
  const DynamicNewsCarousel = dynamic(() => import('../components/news/NewsCarousel'), {ssr: false})

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
              {
                btcData.dailyChange < 0 ? <h1 className='text-red inline'>down {btcData.dailyChange.toFixed(2)}%</h1>
                :  <h1 className='text-green-400 inline'>up {btcData.dailyChange.toFixed(2)}%</h1>
              }
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
            <Collection />
          </div>
          <div>
            <h1 className='ml-7 my-6 text-2xl'>Latest Crypto News</h1>
            <DynamicNewsCarousel newsData={newsData} />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  // fetch latest news articles
  const newsData = await fetchNews();

  // fetch weekly btc data
  const weeklyBtc = await fetchWeeklyBtc();

  // various market data for specified asset
  const btcData = await fetchAssetMetrics("btc");
  btcData.image = 'https://i.imgur.com/wbZ6UVD.png'
  const ethData = await fetchAssetMetrics("eth");
  ethData.image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fethereum-png-12.png&f=1&nofb=1'
  const xmrData = await fetchAssetMetrics("xmr");
  xmrData.image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwiki.trezor.io%2Fimages%2FMonero.png&f=1&nofb=1'
  const solData = await fetchAssetMetrics("sol");
  solData.image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyourcryptolibrary.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fsolana-sol-logo.png&f=1&nofb=1'
  const adaData = await fetchAssetMetrics("ada");
  adaData.image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficons-for-free.com%2Ficonfiles%2Fpng%2F512%2Fcardano%2Bicon-1320162855683510157.png&f=1&nofb=1'

  return {
    props: {
      newsData,
      weeklyBtc,
      btcData,
      ethData,
      xmrData,
      solData,
      adaData,
    }
  }
}

export default Home;