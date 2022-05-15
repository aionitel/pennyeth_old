import React from 'react'
import Modal from 'react-modal'
import { currUserAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'

interface LogoutProps {
  isOpen: boolean
}

const Logout: React.FC<LogoutProps> = ({ isOpen }) => {
  const [user, setUser] = useRecoilState(currUserAtom)

  return (
    <Modal
      className='flex-col justify-center hidden lg:flex'
      isOpen={isOpen}
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
        }
      }}
      >
        <h1>Logout?</h1>
        <button onClick={() => setUser("")} className='bg-red rounded-lg'>
          <h1>Yes</h1>
        </button>
    </Modal>
  )
}

export default Logout