import React from 'react'
import NavItem from './NavItem'
import { BiCoin, BiNews } from 'react-icons/bi'
import { RiHandCoinLine as HandIcon } from 'react-icons/ri'
import { FaRegCreditCard } from 'react-icons/fa'
import { MdOutlineMarkunreadMailbox } from 'react-icons/md'
import { IconType } from 'react-icons'
import { AiOutlineAreaChart } from 'react-icons/ai'

interface NavBarItemsType{
  title: string,
  navName: string,
  path: string,
  icon: IconType
}[]

const NavBarItems: NavBarItemsType[] = [
  {
    title: 'Assets',
    navName: 'assets',
    path: '/',
    icon: HandIcon
  },
  {
    title: 'News',
    navName: 'news',
    path: '/news',
    icon: BiNews
  },
  {
    title: 'Buy / Sell',
    navName: 'purchase',
    path: '/purchase',
    icon: FaRegCreditCard
  },
  {
    title: 'Send / Receive',
    navName: 'transfer',
    path: '/transfer',
    icon: MdOutlineMarkunreadMailbox
  },
  {
    title: 'Prices',
    navName: 'prices',
    path: '/prices',
    icon: AiOutlineAreaChart
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
          <NavItem key={1} title={item.title} navName={item.navName} path={item.path} Icon={item.icon} />
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
