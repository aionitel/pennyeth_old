import ReactModal from 'react-modal'
import React from 'react'

interface ModalProps {
  isOpen: boolean
}

const Modal: React.FC<ModalProps> = ({ isOpen }) => {
  return (
    <div>
      <ReactModal 
        isOpen={isOpen}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'dimgray',
            opacity: '0.5'
          },
          content: {
            position: 'absolute',
            top: '200px',
            left: '200px',
            right: '200px',
            bottom: '200px',
            border: '#202020',
            background: 'black',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            opacity: '1'
          }
        }}
      />
    </div>
  )
}

export default Modal