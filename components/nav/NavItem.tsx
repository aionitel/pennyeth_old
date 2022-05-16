import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface NavItemProps {
  title: string,
  path: string,
  Icon: IconType,
}

// desktop navitem

const NavItem: React.FC<NavItemProps> = ({ title, path, Icon }) => {
  return (
    <Link href={path} passHref>
      <div className='flex w-72 hover:cursor-pointer hover:bg-gray rounded-full transition-all mx-2'>
        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden my-5">
          <div className='bg-gray p-3 rounded-full'>
            <Icon className={ typeof window === 'object' ? 
              location.pathname === path ? 'text-blue text-xl' : 'text-white text-xl' : "text-white"} />
          </div>
          <span>
            <h1 className='text-white text-xl ml-7'>{title}</h1>
          </span>
        </a>
      </div>
    </Link>
  )
}

export default NavItem
