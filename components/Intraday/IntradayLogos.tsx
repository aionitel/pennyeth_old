import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import fetchIntradayPrices from '../../utils/fetchEthIntraday';
import fetchBtcIntraday from '../../utils/fetchBtcIntraday';
import fetchEthIntraday from '../../utils/fetchEthIntraday';

const IntradayLogos: React.FC = () => {
  const logoSize = 30;

  // prevBtcPrice needed for comparison with current price, and coloring it green or red
  const [prevBtcPrice, setPrevBtcPrice] = useState<number>(20000);
  const [prevEthPrice, setPrevEthPrice] = useState<number>(1000);
  const [btcPrice, setBtcPrice] = useState<number>(20000)
  const [ethPrice, setEthPrice] = useState<number>(1000)

  const fetchAndSetPrices = () => {
    setPrevBtcPrice(btcPrice);
    setPrevEthPrice(ethPrice);
    fetchBtcIntraday().then(btc => setBtcPrice(btc));
    fetchEthIntraday().then(eth => setEthPrice(eth));
  }

  // getting new price every 3 seconds for now
  setTimeout(fetchAndSetPrices, 3000)


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
        <h1
          style={{
            color: prevBtcPrice > btcPrice ? '#ff0000' : '#00ff00',
          }}
        >
          ${btcPrice.toFixed(2)}
        </h1>
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