import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Metmask from '../connectCrypto/Metmask'
import WalletConnect from '../connectCrypto/WalletConnect'
import PhantomWallet from '../connectCrypto/PhantomWallet'

// Connect button that allows for user to connect eth or sol wallet with modal

const ConnectWallet: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState<number>(0)

  return (
    <>
    <button 
      className='bg-blue text-white mr-8 py-2 px-2 hover:scale-105 transition-all rounded-sm'
      onClick={() => setModalOpen(true)}
    >
      <h1>Connect Wallet</h1>
    </button>
    <Modal
      className='hidden lg:flex flex-col justify-center'
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.10)'
        },
        content: {
          position: 'absolute',
          top: windowWidth > 768 ? '50%' : '50px',
          left: '500px',
          right: '500px',
          bottom: '200px',
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
        <Metmask />
        <PhantomWallet />
        <WalletConnect />
      </Modal>
    </>
  )
}

export default ConnectWallet