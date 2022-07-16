import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { CurrBtcAtom, DailyBtcAtom } from '../state/atoms'
import BitcoinChart from '../components/chart/BitcoinChart'
import NewsCard from '../components/news/NewsCard'
import fetchBtcNews from '../data/news/btc/fetchBtcNews'
import dynamic from 'next/dynamic'

// dynamically import bitcoin chart to avoid 'screen is not defined' errors
const DynamicBtcChart = dynamic(() => import('../components/chart/BitcoinChart'), {ssr: false})

const Home: NextPage = () => {
  const btcIconSize = 32;

  // latest btc/usd price and daily percent change
  const currBtcPrice = useRecoilValue(CurrBtcAtom);
  const dailyBtc = useRecoilValue(DailyBtcAtom);

  // news articles
  const [articles, setArticles] = useState<any>([]);

  const fetchNews = async () => {
    const fetched_articles = await fetchBtcNews();

    setArticles(fetched_articles);
  }

  useEffect(() => {
    fetchNews();
  }, [])

  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='flex bg-black h-screen text-white'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className='mt-10 lg:text-5xl text-xl my-8 ml-20 pl-20'>Welcome to your crypto portfolio.</h1>
          <div className='flex my-5 text-xl justify-center mr-20'>
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
          <div className='flex'>
            <DynamicBtcChart />
            <div className='flex-row'>
              {articles.map(item => (
                <NewsCard key='' title={item.title} authors={item.authors} image={item.image} date={item.date} url={item.url} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Home