import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'
import Modal from 'react-modal'
import Metmask from '../connectCrypto/Metmask'

// Connect button that allows for user to connect eth or sol wallet with modal

const LoggedOutHeader = () => {
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
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '200px',
            left: '100x',
            right: '100px',
            bottom: '200px',
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
        <div>
          <Metmask />
        </div>
      </Modal>
    </>
  )
}

export default LoggedOutHeader