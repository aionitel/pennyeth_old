import React from 'react'
import { useMoralis } from 'react-moralis'

const WalletConnect: React.FC = () => {
  const { Moralis } = useMoralis()

  const handleLogin = async () => {
    const user = await Moralis.authenticate({ provider: 'walletconnect' })
  }

  return (
    <button
      onClick={() => handleLogin()}
      className='bg-gray text-white text-center py-2 px-2 rounded-lg hover:scale-110 transition-all'
    >
      <h1>Connect with WalletConnect</h1>
    </button>
  )
}

export default WalletConnect