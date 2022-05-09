import React from 'react'
import { useMoralis } from 'react-moralis'
// Connect button that allows for user to connect eth or sol wallet with modal

const LoggedOutHeader = () => {
  const { Moralis } = useMoralis()

  const handleLogin = () => {
    const user = Moralis.authenticate()
  }

  return (
    <button className='bg-blue text-white mr-8 py-2 px-2 hover:scale-105 transition-all rounded-sm'>
      <h1>Connect Wallet</h1>
    </button>
  )
}

export default LoggedOutHeader