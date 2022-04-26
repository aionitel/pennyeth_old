import React from 'react'
import Modal from 'react-modal'
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
}

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

const MobileNavDrawer = ({ isOpen }: any) => {
  return (
    <Modal>
      <div>
        
      </div>
    </Modal>
  )
}

export default MobileNavDrawer