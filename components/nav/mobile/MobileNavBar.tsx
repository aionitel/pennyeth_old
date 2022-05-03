import React from 'react'
import { BiCoin as CoinIcon } from 'react-icons/bi'
import MobileNavModal from './MobileNavModal'

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
      <MobileNavModal />
      <h1 className='text-2xl ml-10'>PennyETH</h1>
      <CoinIcon />
    </nav>
  )
}

export default MobileNavBar
