import React from 'react'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { BiCoin as CoinIcon } from 'react-icons/bi'
import MobileNavDrawer from './MobileNavDrawer'
import {  BiNews } from 'react-icons/bi'
import { RiHandCoinLine as HandIcon } from 'react-icons/ri'
import { MdOutlineMarkunreadMailbox } from 'react-icons/md'
import { IconType } from 'react-icons'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { FaDollarSign } from 'react-icons/fa'
import { AiFillPicture } from 'react-icons/ai'
import { GiTwoCoins } from 'react-icons/gi' 

interface NavBarItemsType{
  title: string,
  path: string,
  icon: IconType
}[]

const NavBarItems: NavBarItemsType[] = [ // also need data for each navItem on mobile navbar
  {
    title: 'Assets',
    path: '/',
    icon: HandIcon
  },
  {
    title: 'News',
    path: '/news',
    icon: BiNews
  },
  {
    title: 'Buy / Sell',
    path: '/purchase',
    icon: FaDollarSign
  },
  {
    title: 'Send / Receive',
    path: '/transfer',
    icon: MdOutlineMarkunreadMailbox
  },
  {
    title: 'Prices',
    path: '/prices',
    icon: AiOutlineAreaChart
  },
  {
    title: 'NFTs',
    path: '/nft',
    icon: AiFillPicture
  },
  {
    title: 'About',
    path: '/about',
    icon: GiTwoCoins
  }
]

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
      <RiBarChartHorizontalLine size={35} />
      <h1 className='text-2xl'>PennyETH</h1>
      <MobileNavDrawer />
      <CoinIcon />
    </nav>
  )
}

export default MobileNavBar
