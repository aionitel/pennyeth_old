import React from 'react'
import NavItem from './NavItem'
import { BiCoin } from 'react-icons/bi'
import NavBarItemsData from './NavItemData'
import Link from 'next/link'

// desktop side navbar

const NavBar: React.FC = () => {
  return (
    <nav className="bg-black border-r border-r-lightgray h-[1] hidden md:block text-white">
      <div className='flex my-8 ml-7 text-3xl'>
        <BiCoin className='pt-1' />
        <Link href='/secret' passHref>
          <h1 className='ml-1 text-md hover:cursor-pointer'>PennyETH</h1>
        </Link>
      </div>
      <ul>
        {NavBarItemsData.map(item => (
          <NavItem key={1} title={item.title} path={item.path} Icon={item.icon} />
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
