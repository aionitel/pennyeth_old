import React from 'react'
import NavItem from './NavItem'
import { BiCoin } from 'react-icons/bi'
import NavBarItemsData from './NavItemData'
import Link from 'next/link'
import ConnectWallet from '../connectWallet/ConnectWallet'
import { useRecoilValue } from 'recoil'
import { currUserAtom } from '../../state/atoms'
import LoggedInHeader from '../header/WalletAddress'
import { motion } from 'framer-motion'
import CurrPriceLogos from '../currPrice/CurrPriceLogos'
import dynamic from 'next/dynamic'

// desktop side navbar

// dynamically turn ssr off for NavItem, to avoid 'location is not defined' errors
const DynamicNavItem = dynamic(() => import('./NavItem'), {ssr: false})

const NavBar: React.FC = () => {
  const user = useRecoilValue(currUserAtom)

  return (
    <nav 
      className="bg-black border-r border-r-lightgray hidden lg:block text-white"
    >
      <div className='flex-col my-8 ml-7 text-3xl'>
        <motion.div 
          className='flex my-5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BiCoin className='pt-1 ml-5' />
          <Link href='/' passHref>
            <h1 className='ml-1 text-md hover:cursor-pointer'>PennyETH</h1>
          </Link>
        </motion.div>
        <CurrPriceLogos />
        {user ? <LoggedInHeader /> : <ConnectWallet />}
      </div>
      <ul>
        {NavBarItemsData.map(item => (
          <DynamicNavItem key={1} title={item.title} path={item.path} Icon={item.icon} />
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
