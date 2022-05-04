import React from 'react'
import Modal from 'react-modal'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { useState } from 'react'
import MobileNavItem from './MobileNavItem'
import NavBarItemsData from '../NavItemData'
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

// main mobile navbar component that slides out when three bars are pressed

const MobileNavModal: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div>
      <RiBarChartHorizontalLine size={35} onClick={() => setModalOpen(!modalOpen)} className='hover:cursor-pointer' />
      <SlidingPane
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        from='left'
      >
        <div onClick={() => setModalOpen(false)}>
          {NavBarItemsData.map(item => (
            <MobileNavItem title={item.title} path={item.path} Icon={item.icon} />
          ))}
        </div>
      </SlidingPane>
    </div>
  )
}

export default MobileNavModal