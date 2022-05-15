import React from 'react'
import Popup from 'reactjs-popup'

// when user has connected wallet, show wallet address in header

const LoggedInHeader = () => {
  
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