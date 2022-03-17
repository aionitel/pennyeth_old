import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import Image from 'next/image'

interface NavItemProps {
  title: string,
  path: string,
  icon: IconType
}

const NavItem: React.FC<NavItemProps> = ({ title, path, icon }) => {
  return (
    <div>
      <li className="relative">
        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          </svg>
          <span>
            <h1>Assets</h1>
          </span>
        </a>
      </li>
    </div>
  )
}

export default NavItem
