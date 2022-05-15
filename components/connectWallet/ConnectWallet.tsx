import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Metmask from '../connectCrypto/Metmask'
import WalletConnect from '../connectCrypto/WalletConnect'
import PhantomWallet from '../connectCrypto/PhantomWallet'

// Connect button that allows for user to connect eth or sol wallet with modal

const ConnectWallet: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button 
        className='bg-blue text-white mr-8 py-2 px-2 hover:scale-105 transition-all rounded-sm'
        onClick={() => setModalOpen(true)}
      >
        <h1>Connect Wallet</h1>
      </button>
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
            backgroundColor: 'rgba(255, 255, 255, 0.10)'
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
            padding: '20px'
          }
        }}
        >
        <h1 className='text-white text-center text-xl mb-2'>Connect Wallet</h1>
        <Metmask />
        <PhantomWallet />
        <WalletConnect />
      </Modal>
    </>
  )
}

export default ConnectWallet