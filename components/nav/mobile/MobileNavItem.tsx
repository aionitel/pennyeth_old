import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons'
import { useRecoilValue } from 'recoil'
import { currPageAtom } from '../../../state/atoms'

interface MobileNavItemProps {
  title: string,
  path: string,
  Icon: IconType,
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ title, path, Icon }) => { // item for each button on sliding mobile navbar, very similar to desktop navbar item
  const currPage = useRecoilValue(currPageAtom)

  return (
    <Link href={path} passHref>
      <div className='flex w-72 hover:cursor-pointer'>
        <li>
          <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden my-5">
            <div className='bg-gray p-3 rounded-full'>
              <Icon className={ currPage === title ? 'text-blue text-xl' : 'text-white text-xl'} />
            </div>
            <span>
              <h1 className='text-white text-xl ml-7'>{title}</h1>
            </span>
          </a>
        </li>
      </div>
    </Link>
  )
}

export default MobileNavItem