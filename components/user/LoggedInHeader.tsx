import React, { useState } from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'
import Modal from '../login/Modal'
import Popup from 'reactjs-popup'

// when user has connected wallet, show wallet address in header
const LoggedInHeader = () => {
  const web3Api = useMoralisWeb3Api()
  
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

export default LoggedInHeader