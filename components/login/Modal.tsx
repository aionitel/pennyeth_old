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
      />
    </div>
  )
}

export default Modal
