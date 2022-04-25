import React from 'react'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { BiCoin as CoinIcon } from 'react-icons/bi'

const MobileNavBar: React.FC = () => {
  return (
    <nav 
      className='
        md:hidden 
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
      <RiBarChartHorizontalLine size={37} />
      <h1 className='text-2xl'>PennyETH</h1>
      <CoinIcon />
    </nav>
  )
}

export default MobileNavBar
