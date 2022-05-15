import React from 'react'
import { useMoralis } from 'react-moralis'

const PhantomWallet: React.FC = () => {
  const { Moralis } = useMoralis()

  const handleLogin = async () => {
    const user = await Moralis.authenticate({ type: 'sol' })
  }

  return (
    <button
      onClick={() => handleLogin()}
      className='
      bg-gray 
      text-white 
      text-center 
      mx-14
      my-2
      py-2 px-2 
      rounded-lg 
      hover:scale-110 
      transition-all'
    >
      <h1>Connect with PhantomWallet</h1>
    </button>
  )
}

export default PhantomWallet