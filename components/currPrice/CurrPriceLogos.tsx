import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { CurrBtcAtom, CurrEthAtom } from '../../state/atoms';
import fetchCurrBtc from '../../data/prices/btc/fetchCurrBtc';
import fetchCurrEth from '../../data/prices/eth/fetchCurrEth';

const CurrPriceLogos: React.FC = () => {
  const btcLogoSize = 30;
  const ethLogoSize = 28;

  const [currBtcPrice, setCurrBtcPrice] = useRecoilState(CurrBtcAtom);
  const [currEthPrice, setCurrEthPrice] = useRecoilState(CurrEthAtom);

  const fetchAndSetPrices = async () => {
    const btcPrice = await fetchCurrBtc();
    const ethPrice = await fetchCurrEth();

    setCurrBtcPrice(btcPrice);
    setCurrEthPrice(ethPrice);

    console.log("Fetched and set current prices: " + btcPrice + ethPrice)
  }

  useEffect(() => fetchAndSetPrices(), [])

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
        <h1 className='mt-1 ml-2'>${currBtcPrice}</h1>
      </div>
      <div className='flex pl-4'>
        <Image 
          src='https://i.imgur.com/izIV4k9.png' 
          height={ethLogoSize} 
          width={ethLogoSize} 
          alt='eth_logo'
          />
          <h1 className='mt-1 ml-2'>{currEthPrice}</h1>
      </div>
    </motion.div>
  )
}

export default CurrPriceLogos;