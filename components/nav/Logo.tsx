import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { allAssetsAtom, newsAtom, weeklyBtcAtom } from '../../state/atoms';
import fetchWeeklyBtc from '../../data/prices/btc/fetchWeeklyBtc';
import fetchNews from '../../data/news/fetchNews';
import { images } from '../../data/images/images';
import { BiCoin } from 'react-icons/bi'
import fetchAllAssets from '../../data/prices/all/fetchAllAssets';

const Logo = () => {
  const [currWeeklyBtc, setCurrWeeklyBtc] = useRecoilState(weeklyBtcAtom);
  const [newsArticles, setNewsArticles] = useRecoilState(newsAtom);
  const [allAssets, setAllAssets] = useRecoilState(allAssetsAtom);

  const tickers = [
    "BTC",
    "ETH",
    "SOL",
    "USDT",
    "ADA",
    "BCH",
    "XRP",
    "BNB",
    "DOGE",
    "LTC",
    "FIL",
    "XMR",
    "ZEC",
    "DASH",
    "ETC",
    "SHIB",
  ]

  useEffect(() => {
    const fetchAndSetPrices = async () => {

      // fetch latest news
      const articles = await fetchNews();

      // fetch percent change in last week for btc and eth
      const weeklyBtc = await fetchWeeklyBtc();

      // fetch all asset data for assets page
      const allAssetData = await fetchAllAssets(tickers);
      console.log(allAssetData)

      setAllAssets(allAssetData);

      setCurrWeeklyBtc(weeklyBtc);

      const new_articles = articles.forEach(item => {
        item.image = images[Math.floor(Math.random() * images.length)];
      })
      
      setNewsArticles(articles);
    }

    fetchAndSetPrices();
  }, [])

  return (
    <div className='flex'>
      <BiCoin className='ml-5 text-4xl hover:cursor-pointer' />
      <h1 className='ml-1 text-3xl hover:cursor-pointer'>PennyETH</h1>
    </div>
  )
}

export default Logo