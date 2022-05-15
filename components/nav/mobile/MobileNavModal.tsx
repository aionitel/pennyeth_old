import React from 'react'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { useState } from 'react'
import MobileNavItem from './MobileNavItem'
import NavBarItemsData from '../NavItemData'
import CheeseburgerMenu from 'cheeseburger-menu'
import { navOpenAtom } from '../../../state/atoms'
import { useRecoilState } from 'recoil'
import MobileConnectWallet from '../../connectWallet/MobileConnectWallet'

// main mobile navbar component that slides out when three bars are pressed

const MobileNavModal: React.FC = () => {
  const [modalOpen, setModalOpen] = useRecoilState(navOpenAtom) // close navbar when pressing "Connect Wallet" button

  return (
    <div className='bg-black md:hidden flex'>
      <RiBarChartHorizontalLine size={35} onClick={() => setModalOpen(!modalOpen)} className='hover:cursor-pointer' />
      <CheeseburgerMenu
        isOpen={modalOpen}
        closeCallback={() => setModalOpen(false)}
      >
        <div onClick={() => setModalOpen(false)}>
          <MobileConnectWallet />
        </div>
        {NavBarItemsData.map(item => (
          <div key={1} onClick={() => setModalOpen(false)}>
            <MobileNavItem title={item.title} path={item.path} Icon={item.icon} />
          </div>
        ))}
      </CheeseburgerMenu>
    </div>
  )
}

export default MobileNavModal