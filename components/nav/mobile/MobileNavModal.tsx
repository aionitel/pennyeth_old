import React from 'react'
import Modal from 'react-modal'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { useState } from 'react'
import MobileNavItem from './MobileNavItem'
import NavBarItems from '../NavItems'

const MobileNavModal: React.FC = () => { // main mobile navbar component that slides out when three bars are pressed
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div>
      <RiBarChartHorizontalLine size={35} onClick={() => setModalOpen(!modalOpen)} />
      <Modal
        isOpen={modalOpen}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '0px',
            right: '40px',
            bottom: '0px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
      >
        {NavBarItems.map((item, index) => (
          <div>
            <MobileNavItem title={item.title} path={item.path} icon-={item.icon} />
          </div>
        )}
      </Modal>
    </div>
  )
}

export default MobileNavModal