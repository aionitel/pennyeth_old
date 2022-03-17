import React from 'react'
import NavItem from './NavItem'
import { BiCoin, BiNews } from 'react-icons/bi'
import { GiTwoCoins } from 'react-icons/gi'

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
    <div className="w-60 shadow-md bg-black px-1 h-screen">
      <div className='flex ml-5'>
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
