import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'
import Modal from '../login/Modal'
import Popup from 'reactjs-popup'
import LoggedIn from '../user/LoggedIn'

const Header = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const currUser = useRecoilValue(currUserAtom)
  const currPage = useRecoilValue(currPageAtom)
  
  if (!currUser) { // if user wallet is not connected
    return (
      <>
        <header className='justify-between bg-black items-center text-white h-20 hidden md:flex border-b border-lightgray'>
          <h1 className='text-4xl ml-10'>{currPage}</h1>
          <Popup
            trigger={open => (
              <button className="button">Trigger - {open ? 'Opened' : 'Closed'}</button>
            )}
            position="left top"
            closeOnDocumentClick
          >
            <div>Press me!</div>
          </Popup>
        </header>
        <Modal isOpen={modalVisible} />
      </>
    )
  } else { // if user wallet is connected
    return (
      <div>
        Wallet Connected
        {currUser}
      </div>
    )
  }
}

export default Header