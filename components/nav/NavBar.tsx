import React from 'react'
import NavItem from './NavItem'
import { BiCoin, BiNews } from 'react-icons/bi'
import { RiHandCoinLine as HandIcon } from 'react-icons/ri'
import { FaRegCreditCard } from 'react-icons/fa'

const NavBarItems = [
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
  }
]

const NavBar: React.FC = () => {
  return (
    <div className="bg-black border-r border-r-lightgray h-screen hidden sm:block text-white">
      <div className='flex my-8 ml-7 text-3xl'>
        <BiCoin className='pt-1' />
        <h1 className='ml-1 text-md'>PennyETH</h1>
      </div>
      <ul>
        {NavBarItems.map(item => (
          <NavItem title={item.title} navName={item.navName} path={item.path} Icon={item.icon} />
        ))}
      </ul>
    </div>
  )
}

export default NavBar
