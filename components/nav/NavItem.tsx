import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import Image from 'next/image'

interface NavItemProps {
  title: string,
  path: string,
  Icon: IconType,
}

const NavItem: React.FC<NavItemProps> = ({ title, path, Icon }) => {
  return (
    <div className='flex'>
      <li className='hover:cursor-pointer'>
        <Link href={path}>
          <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden">
            <div className='bg-gray p-2 rounded-full'>
              <Icon className='text-white' />
            </div>
            <span>
              <h1 className='text-white text-2xl'>{title}</h1>
            </span>
          </a>
        </Link>
      </li>
    </div>
  )
}

export default NavItem
