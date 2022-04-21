import React, { useState } from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'
import Modal from '../login/Modal'
import Popup from 'reactjs-popup'

const LoggedIn = () => {
  const web3Api = useMoralisWeb3Api()

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const currUser = useRecoilValue(currUserAtom)
  const currPage = useRecoilValue(currPageAtom)
  
  return (
    <>
      <div className='justify-between bg-black items-center text-white h-20 hidden sm:flex border-b border-lightgray'>
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
      </div>
      <Modal isOpen={modalVisible} />
    </>
  )
}

export default LoggedIn