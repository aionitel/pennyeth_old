import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { assetMetricsAtom, WeeklyBtcAtom, WeeklyEthAtom } from '../../state/atoms';
import fetchWeeklyBtc from '../../data/prices/btc/fetchWeeklyBtc';
import fetchWeeklyEth from '../../data/prices/eth/fetchWeeklyEth';
import fetchAssetMetrics from '../../data/prices/fetchAssetMetrics';

const btcLogoSize = 30;

const CurrPriceLogos: React.FC = () => {
  const [currAssetMetrics, setCurrAssetMetrics] = useRecoilState(assetMetricsAtom);
  const [currWeeklyBtc, setCurrWeeklyBtc] = useRecoilState(WeeklyBtcAtom);
  const [currWeeklyEth, setCurrWeeklyEth] = useRecoilState(WeeklyEthAtom);

  useEffect(() => {
    const fetchAndSetPrices = async () => {

      // percent change in last week for btc and eth
      const weeklyBtc = await fetchWeeklyBtc();
      const weeklyEth = await fetchWeeklyEth();

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

      // set global price for each asset to be used later in app
      setCurrAssetMetrics([
        btcData,
        ethData,
        xmrData,
        solData,
        adaData,
      ])

      console.log(currAssetMetrics[2]);

      setCurrWeeklyBtc(weeklyBtc);
      setCurrWeeklyEth(weeklyEth);
    }

    fetchAndSetPrices();
  }, [])

  return (
    <motion.div 
      className='flex text-base my-6'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex'>
        <Image 
          src='https://i.imgur.com/wbZ6UVD.png' 
          height={btcLogoSize}
           width={btcLogoSize} 
           alt='btc_logo'/>
        <h1 className='mt-1 ml-2'>${currAssetMetrics[0].price.toLocaleString().slice(0, 9)}</h1>
      </div>
      <div className='flex pl-4'>
        <Image 
          src='https://i.imgur.com/izIV4k9.png' 
          height={20}
          width={28} 
          alt='eth_logo'
          />
        <h1 className='mt-1 ml-2'>${currAssetMetrics[1].price.toLocaleString().slice(0, 8)}</h1>
      </div>
    </motion.div>
  )
}

export default CurrPriceLogos;