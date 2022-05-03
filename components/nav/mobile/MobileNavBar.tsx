import React from 'react'
import { BiCoin as CoinIcon } from 'react-icons/bi'
import MobileNavModal from './MobileNavModal'
import Link from 'next/link'

const MobileNavBar: React.FC = () => { // mainly top of screen, with three bars, logo, and name
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
      <Link href='/' passHref>
        <h1 className='text-2xl'>PennyETH</h1>
      </Link>
      <CoinIcon />
    </nav>
  )
}

export default MobileNavBar
