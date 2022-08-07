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
      const ethData = await fetchAssetMetrics("eth");
      const xmrData = await fetchAssetMetrics("xmr");
      const solData = await fetchAssetMetrics("sol");
      const adaData = await fetchAssetMetrics("ada");

      // set global price for each asset to be used later in app
      setCurrAssetMetrics([
        btcData,
        ethData,
        xmrData,
        solData,
        adaData,
      ])

      setCurrWeeklyBtc(weeklyBtc);
      setCurrWeeklyEth(weeklyEth);

      console.log(currAssetMetrics);
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
        <h1 className='mt-1 ml-2'>${currAssetMetrics[0].price.toFixed(2)}</h1>
      </div>
      <div className='flex pl-4'>
        <Image 
          src='https://i.imgur.com/izIV4k9.png' 
          height={20}
          width={28} 
          alt='eth_logo'
          />
          <h1 className='mt-1 ml-2'>{currAssetMetrics[1].price.toFixed(2)}</h1>
      </div>
    </motion.div>
  )
}

export default CurrPriceLogos;