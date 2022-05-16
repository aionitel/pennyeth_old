import React from 'react'
import NavItem from './NavItem'
import { BiCoin } from 'react-icons/bi'
import NavBarItemsData from './NavItemData'
import Link from 'next/link'
import ConnectWallet from '../connectWallet/ConnectWallet'
import { useRecoilValue } from 'recoil'
import { currUserAtom } from '../../state/atoms'
import LoggedInHeader from '../header/WalletAddress'

// desktop side navbar

const NavBar: React.FC = () => {
  const user = useRecoilValue(currUserAtom)

  return (
    <nav className="bg-black border-r border-r-lightgray hidden lg:block text-white">
      <div className='flex-col my-8 ml-7 text-3xl'>
        <div className='flex my-5'>
          <BiCoin className='pt-1 ml-5' />
          <Link href='/secret' passHref>
            <h1 className='ml-1 text-md hover:cursor-pointer'>PennyETH</h1>
          </Link>
        </div>
        {user ? <LoggedInHeader /> : <ConnectWallet />}
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
