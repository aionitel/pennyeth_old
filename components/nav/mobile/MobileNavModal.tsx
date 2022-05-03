import React from 'react'
import Modal from 'react-modal'
import {  BiNews } from 'react-icons/bi'
import { RiHandCoinLine as HandIcon } from 'react-icons/ri'
import { MdOutlineMarkunreadMailbox } from 'react-icons/md'
import { IconType } from 'react-icons'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { FaDollarSign } from 'react-icons/fa'
import { AiFillPicture } from 'react-icons/ai'
import { GiTwoCoins } from 'react-icons/gi'
import { RiBarChartHorizontalLine } from 'react-icons/ri'
import { useState } from 'react'

interface MobileNavBarItemsType{
  title: string,
  path: string,
  icon: IconType
}

const MobileNavBarItems: MobileNavBarItemsType[] = [ // also need data for each navItem on mobile navbar
  {
    title: 'Assets',
    path: '/',
    icon: HandIcon
  },
  {
    title: 'News',
    path: '/news',
    icon: BiNews
  },
  {
    title: 'Buy / Sell',
    path: '/purchase',
    icon: FaDollarSign
  },
  {
    title: 'Send / Receive',
    path: '/transfer',
    icon: MdOutlineMarkunreadMailbox
  },
  {
    title: 'Prices',
    path: '/prices',
    icon: AiOutlineAreaChart
  },
  {
    title: 'NFTs',
    path: '/nft',
    icon: AiFillPicture
  },
  {
    title: 'About',
    path: '/about',
    icon: GiTwoCoins
  }
]

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
        <div className='flex justify-center align-center text-center mt-20 pt-20'>
        </div>
      </Modal>
    </div>
  )
}

export default MobileNavModal