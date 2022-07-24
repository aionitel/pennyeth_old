import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import NewsCard from '../components/news/NewsCard'
import BitcoinChart from '../components/chart/BitcoinChart'
import EthChart from '../components/chart/EthChart'
import fetchDailyBtc from '../data/prices/btc/fetchDailyBtc'
import fetchDailyEth from '../data/prices/eth/fetchDailyEth'
import fetchWeeklyBtc from '../data/prices/btc/fetchWeeklyBtc'
import fetchWeeklyEth from '../data/prices/eth/fetchWeeklyEth'

// test data
const NewsData: NewsArticleProps = {
  title: "Texas bitcoin miners back online after power surge caused curtailments",
  authors: ["Jamie Redman"],
  image: "https://s.yimg.com/uu/api/res/1.2/xXYF4FFhrTtMRAjWFWaRhw--~B/aD01MjY7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/a56bb3178474ee2d6766f403c5216f9a",
  date: "2022-07-19",
  url: "https://news.yahoo.com/texas-bitcoin-miners-back-online-203424037.html"
}

// size of bitcoin logo in header 
const btcIconSize = 55;

interface HomePageProps {
  fetchedDailyBtc: number,
  fetchedDailyEth: number,
  weeklyBtc: [],
  weeklyEth: []
}

// type for news article that will be displayed
interface NewsArticleProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

const Home: NextPage<HomePageProps> = ({ fetchedDailyBtc, fetchedDailyEth, weeklyBtc, weeklyEth }) => {
  // articles that are returned from fetchNews()
  const [article, setArticle] = useState<NewsArticleProps>({
    title: "",
    authors: [],
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F65%2FBlack_screen_of_the_camera_2014-04-24_19-20.jpg%2F1280px-Black_screen_of_the_camera_2014-04-24_19-20.jpg&f=1&nofb=1",
    date: "",
    url: "",
  });

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
            <div className='lg:text-4xl text-center mt-8 lg:mb-8 lg:mr-20 lg:pr-20 text-2xl'>
              <a href='https://bitcoin.org/bitcoin.pdf' rel="noopener noreferrer" target='_blank'>
                <img src='https://i.imgur.com/wbZ6UVD.png' height={btcIconSize} width={btcIconSize} alt='main-btc' className='inline mb-2' />
                <h1 className='inline ml-2'>Bitcoin</h1>
              </a>
              <h1 className='inline lg:ml-2 lg:mr-2 ml-1 mr-1'>is</h1>
              {
                fetchedDailyBtc < 0 ? <h1 className='inline text-red'>down {fetchedDailyBtc}%</h1> : <h1 className='inline text-green-400'>up {fetchedDailyBtc}%</h1>
              }
              <h1 className='inline'> today.</h1>
            </div>
          </div>
          <div className='lg:flex lg:mt-4 mt-10'>
            <BitcoinChart data={weeklyBtc} />
            <div className='flex-row hidden lg:inline'>
              <h1 className='text-xl font-bold ml-2'>Latest BTC News</h1>
              <NewsCard key='' title={NewsData.title} authors={NewsData.authors} image={NewsData.image} date={NewsData.date} url={NewsData.url} />
            </div>
          </div>
          <div className='lg:text-4xl lg:ml-20 text-center lg:text-left lg:pl-14'>
            <a href='https://ethereum.org/669c9e2e2027310b6b3cdce6e1c52962/Ethereum_Whitepaper_-_Buterin_2014.pdf' rel="noopener noreferrer" target='_blank'>
              <img src='https://i.imgur.com/izIV4k9.png' height={btcIconSize} width={btcIconSize} alt='main-eth' className='inline pb-2' />
              <h1 className='inline mr-1 ml-2 lg:mr-2'>Ethereum</h1>
            </a>
            <h1 className='mr-1 lg:mr-2 mt-2 inline'>is</h1>
            {
                fetchedDailyEth < 0 ? <h1 className='inline text-red mt-2'>down {fetchedDailyEth}%</h1> : <h1 className='inline text-green-400 mt-2'>up {fetchedDailyEth}%</h1>
            }
            <h1 className='inline mt-2 lg:ml-2 ml-1'>today.</h1>
          </div>
          <div className='lg:flex lg:mt-4 mt-10'>
            <EthChart data={weeklyEth} />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Home