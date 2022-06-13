import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const IntradayLogos: React.FC = () => {
  const logoSize = 30;

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
        <h1 className='text-red pt-1 mx-2'>-10.6%</h1>
      </div>
      <div className='flex hover:cursor-pointer mr-10'>
        <Image 
          src='https://i.imgur.com/izIV4k9.png' 
          height={logoSize} 
          width={logoSize} 
          alt='eth_logo' />
        <h1 className='text-red pt-1 mx-3'>-5.8%</h1>
      </div>
    </motion.div>
  )
}

export default IntradayLogos