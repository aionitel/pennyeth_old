import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { CurrBtcAtom } from '../../state/atoms';
import { CurrEthAtom } from '../../state/atoms';
import axios from 'axios'
import fetchCurrBtc from '../../utils/fetchCurrBtc';
import fetchCurrEth from '../../utils/fetchCurrEth';

const IntradayLogos: React.FC = () => {
  const logoSize = 30;

  const [currBtcPrice, setCurrBtcPrice] = useRecoilState(CurrBtcAtom);
  const [currEthPrice, setCurrEthPrice] = useRecoilState(CurrEthAtom);

  const fetchAndSetPrice = async () => {
    const btcPrice = await fetchCurrBtc();
    const ethPrice = await fetchCurrEth();

    setCurrBtcPrice(btcPrice);
    setCurrEthPrice(ethPrice);

    console.log("Fetched and set current prices: " + btcPrice + ethPrice)
  }

  useEffect(() => fetchAndSetPrice(), [])

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
          height={logoSize}
           width={logoSize} 
           alt='btc_logo'/>
        <h1 className='mt-1 ml-2'>${currBtcPrice}</h1>
      </div>
      <div className='flex pl-4'>
        <Image 
          src='https://i.imgur.com/izIV4k9.png' 
          height={logoSize} 
          width={logoSize} 
          alt='eth_logo'
          />
        <h1 className='mt-1 ml-2'>${currEthPrice}</h1>
      </div>
    </motion.div>
  )
}

export default IntradayLogos