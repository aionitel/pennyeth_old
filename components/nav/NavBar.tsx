import React, { useState } from 'react'
import NavItem from './NavItem'
import { BiCoin, BiNews } from 'react-icons/bi'
import { RiHandCoinLine as HandIcon } from 'react-icons/ri'

const NavBarItems = [
  {
    title: 'Assets',
    path: '/',
    icon: HandIcon
  },
  {
    title: 'News',
    path: '/news',
    icon: BiNews
  }
]

const NavBar: React.FC = () => {
  return (
    <div className="bg-black border border-r-lightgray h-screen hidden sm:block">
      <div className='flex my-8 items-center'>
        <BiCoin className='text-white' />
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
