import React, { useState } from 'react'
import NavItem from './NavItem'
import { BiCoin, BiNews } from 'react-icons/bi'
import { GiTwoCoins } from 'react-icons/gi'
import { VscThreeBars } from 'react-icons/vsc'

const NavBarItems = [
  {
    title: 'Assets',
    path: '/',
    icon: BiCoin
  },
  {
    title: 'News',
    path: '/news',
    icon: BiNews
  }
]

const NavBar: React.FC = () => {
  return (
    <div className="flex-row bg-black border border-r-lightgray h-screen hidden sm:block">
      <div>
        <GiTwoCoins className='text-white' />
        <h1 className='text-white'>Pennyeth</h1>
      </div>
      <ul>
        {NavBarItems.map(item => (
          <NavItem title={item.title} path={item.path} Icon={item.icon} />
        ))}
      </ul>
    </div>
  )
}

export default NavBar
