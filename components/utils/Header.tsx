import React, { useState } from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'
import Modal from '../login/Modal'

const Header = () => {
  const web3Api = useMoralisWeb3Api()

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const currUser = useRecoilValue(currUserAtom)
  const currPage = useRecoilValue(currPageAtom)
  
  if (!currUser) { // if user wallet is not connected
    return (
      <>
        <div className='justify-between bg-black items-center text-white h-20 hidden sm:flex border-b border-lightgray'>
          <h1 className='text-4xl ml-10'>{currPage}</h1>
          <button>
            <div className='border-white mr-8' data-event='click' data-tip='hello world`'>Press me</div>
          </button>
        </div>
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