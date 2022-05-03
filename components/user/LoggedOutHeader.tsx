import React from 'react'
import { useMoralis } from 'react-moralis'
// Connect button that allows for user to connect eth or sol wallet with modal

const LoggedOutHeader = () => {
  const { Moralis } = useMoralis()

  const handleLogin = () => {
    const user = Moralis.authenticate()
  }

  return (
    <div>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  )
}

export default LoggedOutHeader