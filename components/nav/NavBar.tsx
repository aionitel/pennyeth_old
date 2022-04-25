import React from 'react'
import NavItem from './NavItem'
import { BiCoin, BiNews } from 'react-icons/bi'
import { RiHandCoinLine as HandIcon } from 'react-icons/ri'
import { MdOutlineMarkunreadMailbox } from 'react-icons/md'
import { IconType } from 'react-icons'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { FaDollarSign } from 'react-icons/fa'
import { AiFillPicture } from 'react-icons/ai'

interface NavBarItemsType{
  title: string,
  path: string,
  icon: IconType
}[]

const NavBarItems: NavBarItemsType[] = [ // each clickable item in navbar, need different navName because of actual page names and endpoints: /transfer vs send / receive
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
  }
]

const NavBar: React.FC = () => {
  return (
    <nav className="bg-black border-r border-r-lightgray h-[1] hidden md:block text-white">
      <div className='flex my-8 ml-7 text-3xl'>
        <BiCoin className='pt-1' />
        <h1 className='ml-1 text-md'>PennyETH</h1>
      </div>
      <ul>
        {NavBarItems.map(item => (
          <NavItem key={1} title={item.title} path={item.path} Icon={item.icon} />
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
