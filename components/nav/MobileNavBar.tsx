import React from 'react'
import { GoThreeBars as ThreeBars } from 'react-icons/go'
import { BiCoin as CoinIcon } from 'react-icons/bi'

const MobileNavBar: React.FC = () => {
  return (
    <nav 
      className='
        sm:hidden 
        flex 
        justify-between 
        px-5 
        py-8
        h-30
        bg-black border-b 
        border-lightgray 
        w-screen 
        text-white
        text-4xl
        sticky
        top-0
        z-[1000]
        '
    >
      <ThreeBars />
      <h1 className='text-2xl'>PennyETH</h1>
      <CoinIcon />
    </nav>
  )
}

export default MobileNavBar
