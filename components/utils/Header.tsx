import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'
import Modal from '../login/Modal'
import Popup from 'reactjs-popup'
import LoggedIn from '../user/LoggedIn'
import LoggedOut from '../user/LoggedOut'

const Header = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const currUser = useRecoilValue(currUserAtom)
  const currPage = useRecoilValue(currPageAtom)

  return (
    <>
      <header className='justify-between bg-black items-center text-white h-20 hidden md:flex border-b border-lightgray'>
        <h1 className='text-4xl ml-10'>{currPage}</h1>
        {currUser ? <LoggedIn /> : <LoggedOut />}
      </header>
      <Modal isOpen={modalVisible} />
    </>
  )
}

export default Header