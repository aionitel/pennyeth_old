import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { CurrBtcPrice } from '../../state/atoms';
import { CurrEthPrice } from '../../state/atoms';
import fetchCurrEth from '../../utils/fetchCurrEth';
import fetchCurrBtc from '../../utils/fetchCurrBtc';

const IntradayLogos: React.FC = () => {
  const logoSize = 30;
  
  const [currBtcPrice, setCurrBtcPrice] = useRecoilState(CurrBtcPrice);
  const [currEthPrice, setCurrEthPrice] = useRecoilState(CurrEthPrice);

  const fetchAndSetPrices = async () => {
    // fetch new prices every 10 seconds, wokrs decently well
    await fetchCurrBtc().then(btc => setTimeout(() => setCurrBtcPrice(btc), 10000));
    await fetchCurrEth().then(eth => setTimeout(() => setCurrEthPrice(eth), 10000));

    console.log("fetching prices again")
  }

  useEffect(() => {
    fetchAndSetPrices();
  })

  return (
    <motion.div 
      className='flex text-base justify-center mb-5 mt-6 ml-2'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex hover:cursor-pointer mr-8'>
        <Image 
          src='https://i.imgur.com/wbZ6UVD.png' 
          height={logoSize}
           width={logoSize} 
           alt='btc_logo'/>
        <h1>${currBtcPrice}</h1>
      </div>
      <div className='flex hover:cursor-pointer mr-10'>
        <Image 
          src='https://i.imgur.com/izIV4k9.png' 
          height={logoSize} 
          width={logoSize} 
          alt='eth_logo' />
        <h1>${currEthPrice}</h1>
      </div>
    </motion.div>
  )
}

export default IntradayLogos