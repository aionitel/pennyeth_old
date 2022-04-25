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
    <Popup
      trigger={open => (
        <div>Logged In</div>
      )}
      position="left top"
      closeOnDocumentClick
    >
      <div>Press me!</div>
    </Popup>
  )
}

export default LoggedIn