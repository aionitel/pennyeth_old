import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import axios from 'axios';

const IntradayLogos: React.FC = () => {
  const [btcPrice, setBtcPrice] = useState<number>()
  const [ethPrice, setEthPrice] = useState<number>()

  const logoSize = 30;

  const btc_url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${process.env.API_KEY}`;
  const eth_url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${process.env.API_KEY}`;

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
        <h1 className='text-red pt-1 mx-2'>${btcPrice}</h1>
      </div>
      <div className='flex hover:cursor-pointer mr-10'>
        <Image 
          src='https://i.imgur.com/izIV4k9.png' 
          height={logoSize} 
          width={logoSize} 
          alt='eth_logo' />
        <h1 className='text-red pt-1 mx-3'>${ethPrice}</h1>
      </div>
    </motion.div>
  )
}

export default IntradayLogos