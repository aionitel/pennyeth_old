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
          <button data-tooltip-target="tooltip-dark" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Dark tooltip</button>
          <div id="tooltip-dark" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Tooltip content
          <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
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