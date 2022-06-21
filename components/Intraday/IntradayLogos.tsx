import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { CurrBtcAtom } from '../../state/atoms';
import { CurrEthAtom } from '../../state/atoms';

const IntradayLogos: React.FC = () => {
  const logoSize = 30;

  const currBtcPrice = useRecoilValue(CurrBtcAtom)
  const currEthPrice = useRecoilValue(CurrEthAtom)

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