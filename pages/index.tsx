import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { DailyBtcAtom } from '../state/atoms'
import NewsCard from '../components/news/NewsCard'
import fetchBtcArticle from '../data/news/btc/fetchBtcArticle'
import dynamic from 'next/dynamic'

// dynamically import bitcoin chart to avoid 'screen is not defined' errors
const DynamicBtcChart = dynamic(() => import('../components/chart/BitcoinChart'), {ssr: false})

// size of bitcoin logo in header 
const btcIconSize = 55;

// type for news article that will be displayed
interface NewsArticleProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

const Home: NextPage = () => {
  // articles that are returned from fetchNews()
  const [article, setArticle] = useState<NewsArticleProps>({
    title: "",
    authors: [],
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F65%2FBlack_screen_of_the_camera_2014-04-24_19-20.jpg%2F1280px-Black_screen_of_the_camera_2014-04-24_19-20.jpg&f=1&nofb=1",
    date: "",
    url: "",
  });

  // latest btc/usd price and daily percent change
  const dailyBtc = useRecoilValue(DailyBtcAtom);

  const fetchNews = async () => {
    const fetched_article = await fetchBtcArticle();
    setArticle(fetched_article);
  }

  const NewsData: NewsArticleProps = {
    title: "Texas bitcoin miners back online after power surge caused curtailments",
    authors: ["Jamie Redman"],
    image: "https://s.yimg.com/uu/api/res/1.2/xXYF4FFhrTtMRAjWFWaRhw--~B/aD01MjY7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/a56bb3178474ee2d6766f403c5216f9a",
    date: "2022-07-19",
    url: "https://news.yahoo.com/texas-bitcoin-miners-back-online-203424037.html"
  }

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
          <div className='lg:mr-20 lg:pr-20'>
            <div className='text-4xl text-center mt-8 lg:mb-8 lg:mr-20 lg:pr-20'>
              <img src='https://i.imgur.com/wbZ6UVD.png' height={btcIconSize} width={btcIconSize} alt='main-btc' className='inline mb-2' />
              <h1 className='inline mr-1 ml-2'>Bitcoin is</h1>
              {
                dailyBtc < 0 ? <h1 className='inline text-red'>down {dailyBtc}%</h1> : <h1 className='inline text-green-400'>up {dailyBtc}%</h1>
              }
              <h1 className='inline'> today.</h1>
            </div>
          </div>
          <div className='lg:flex lg:mt-4 mt-10'>
            <DynamicBtcChart />
            <div className='flex-row hidden lg:inline'>
              <h1 className='text-xl font-bold ml-2'>Latest BTC News</h1>
              <NewsCard key='' title={NewsData.title} authors={NewsData.authors} image={NewsData.image} date={NewsData.date} url={NewsData.url} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Home