import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Metmask from '../connectCrypto/Metmask'
import WalletConnect from '../connectCrypto/WalletConnect'
import PhantomWallet from '../connectCrypto/PhantomWallet'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import Popup from 'reactjs-popup'

// Connect button that allows for user to connect eth or sol wallet with modal

const ConnectWallet: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className='flex'>
        <button 
          className='bg-blue text-white text-center mt-5 py-5 px-7 hover:scale-105 transition-all rounded-2xl text-base ml-8 hover:rounded-none duration-200'
          onClick={() => setModalOpen(true)}
        >
          <h1>Connect Wallet</h1>
        </button>
      </div>
      <Modal
        className='flex-col justify-center hidden lg:flex'
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.10)',
            opacity: typeof window !== 'undefined' && window.innerWidth < 1200 ? 0 : 1
          },
          content: {
            position: 'absolute',
            top: '230px',
            bottom: '270px',
            left: '500px',
            right: '500px',
            border: '1px solid #ccc',
            background: 'black',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '20px',
            outline: 'none',
            opacity: typeof window !== 'undefined' && window.innerWidth < 1200 ? 0 : 1
          }
        }}
        >
        <h1 className='mb-2 text-white text-center'>Connect Wallet</h1>
        <Metmask />
        <PhantomWallet />
        <WalletConnect />
      </Modal>
    </>
  )
}

export default ConnectWallet