import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { assetMetricsAtom, newsAtom, weeklyBtcAtom } from '../../state/atoms';
import fetchWeeklyBtc from '../../data/prices/btc/fetchWeeklyBtc';
import fetchWeeklyEth from '../../data/prices/eth/fetchWeeklyEth';
import fetchNews from '../../data/news/fetchNews';
import images from '../../data/images/images';
import { BiCoin } from 'react-icons/bi'
import fetchAssetData from '../../data/prices/misc/fetchAssetData';

const Logo = () => {
  const [currAssetMetrics, setCurrAssetMetrics] = useRecoilState(assetMetricsAtom);
  const [currWeeklyBtc, setCurrWeeklyBtc] = useRecoilState(weeklyBtcAtom);
  const [newsArticles, setNewsArticles] = useRecoilState(newsAtom);

  useEffect(() => {
    const fetchAndSetPrices = async () => {

      // fetch latest news
      const articles = await fetchNews();

      // percent change in last week for btc and eth
      const weeklyBtc = await fetchWeeklyBtc();
      const weeklyEth = await fetchWeeklyEth();

      // various market data for specified asset
      const btcData = await fetchAssetData("btc");
      btcData.image = 'https://i.imgur.com/wbZ6UVD.png'
      const ethData = await fetchAssetData("eth");
      ethData.image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Fethereum-png-12.png&f=1&nofb=1'
      const xmrData = await fetchAssetData("xmr");
      xmrData.image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwiki.trezor.io%2Fimages%2FMonero.png&f=1&nofb=1'
      const solData = await fetchAssetData("sol");
      solData.image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyourcryptolibrary.com%2Fwp-content%2Fuploads%2F2021%2F05%2Fsolana-sol-logo.png&f=1&nofb=1'
      const adaData = await fetchAssetData("ada");
      adaData.image = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficons-for-free.com%2Ficonfiles%2Fpng%2F512%2Fcardano%2Bicon-1320162855683510157.png&f=1&nofb=1'

      // set global price for each asset to be used later in app
      setCurrAssetMetrics([
        btcData,
        ethData,
        xmrData,
        solData,
        adaData,
      ])

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