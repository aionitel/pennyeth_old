import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import NewsCard from '../components/news/NewsCard'
import { DailyBtcAtom, DailyEthAtom, WeeklyBtcAtom, WeeklyEthAtom } from '../state/atoms'
import HomeChart from '../components/chart/HomeChart'

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
  const [btcArticle, setBtcArticle] = useState<NewsArticleProps>({
    title: "",
    authors: [],
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F65%2FBlack_screen_of_the_camera_2014-04-24_19-20.jpg%2F1280px-Black_screen_of_the_camera_2014-04-24_19-20.jpg&f=1&nofb=1",
    date: "",
    url: "",
  });

  const [ethArticle, setEthArticle] = useState<NewsArticleProps>({
    title: "",
    authors: [],
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F65%2FBlack_screen_of_the_camera_2014-04-24_19-20.jpg%2F1280px-Black_screen_of_the_camera_2014-04-24_19-20.jpg&f=1&nofb=1",
    date: "",
    url: "",
  });

  const dailyBtc = useRecoilValue(DailyBtcAtom);
  const dailyEth = useRecoilValue(DailyEthAtom);
  const weeklyBtc = useRecoilValue(WeeklyBtcAtom);
  const weeklyEth = useRecoilValue(WeeklyEthAtom);

  // fetch news articles
  /* useEffect(() => {
    const fetchNews = async () => {
      const btc_article = await fetchBtcArticle();
      const eth_article = await fetchEthArticle()

      setBtcArticle({
        title: btc_article.title,
        authors: btc_article.authors,
        image: btc_article.image ? btc_article.image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quoteinspector.com%2Fmedia%2Fbitcoin%2Fbitcoin-34569.jpg&f=1&nofb=1',
        date: btc_article.date,
        url: btc_article.url
      })
      setEthArticle({
        title: eth_article.title,
        authors: eth_article.authors,
        image: eth_article.image ? btc_article.image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.quoteinspector.com%2Fmedia%2Fbitcoin%2Fethereum-coin-blue-candlesticks-wo.jpg&f=1&nofb=1',
        date: eth_article.date,
        url: eth_article.url
      })
    }

    fetchNews();
  }, []) */

  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='flex bg-black h-max text-white'>
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
                dailyBtc < 0 ? <h1 className='inline text-red'>down {dailyBtc}%</h1> : <h1 className='inline text-green-400'>up {dailyBtc}%</h1>
              }
              <h1 className='inline'> today.</h1>
            </div>
          </div>
          <div className='lg:flex lg:mt-4 mt-10'>
            <HomeChart data={weeklyBtc} type='BTC' />
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
                dailyEth < 0 ? <h1 className='inline text-red mt-2'>down {dailyEth}%</h1> : <h1 className='inline text-green-400 mt-2'>up {dailyEth}%</h1>
            }
            <h1 className='inline mt-2 lg:ml-2 ml-1'>today.</h1>
          </div>
          <div className='lg:flex lg:mt-4 mt-10'>
            <HomeChart data={weeklyEth} type='ETH' />
            <div className='flex-row hidden lg:block'>
              <h1>Latest ETH News</h1>
              <NewsCard key='' title={NewsData.title} authors={NewsData.authors} image={NewsData.image} date={NewsData.date} url={NewsData.url} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Home