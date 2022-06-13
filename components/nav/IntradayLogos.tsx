import Image from 'next/image'
import React from 'react'

const IntradayLogos: React.FC = () => {
  const logoSize = 30;

  return (
    <div className='flex text-base'>
      <div className='flex'>
        <Image src='https://i.imgur.com/wbZ6UVD.png' height={logoSize} width={logoSize} alt='btc_logo'/>
        <h1 className='text-red'>-10.6%</h1>
      </div>
      <div className='flex'>
        <Image src='https://i.imgur.com/6DR9cHW.png' height={logoSize} width={logoSize} alt='eth_logo' />
        <h1 className='text-red'>-5.8%</h1>
      </div>
    </div>
  )
}

export default IntradayLogos