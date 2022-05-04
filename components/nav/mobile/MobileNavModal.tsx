import React from 'react'
import Modal from 'react-modal'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { useState } from 'react'
import MobileNavItem from './MobileNavItem'
import NavBarItemsData from '../NavItemData'
import CheeseburgerMenu from 'cheeseburger-menu'

// main mobile navbar component that slides out when three bars are pressed

const MobileNavModal: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div className='bg-black md:hidden flex'>
      <RiBarChartHorizontalLine size={35} onClick={() => setModalOpen(!modalOpen)} className='hover:cursor-pointer' />
      <CheeseburgerMenu
        isOpen={modalOpen}
        closeCallback={() => setModalOpen(false)}
      >
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