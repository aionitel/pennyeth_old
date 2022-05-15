import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

const PhantomWallet: React.FC = () => {
  const { Moralis } = useMoralis()

  const logoSize = 30; // phantom wallet logo size

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
      transition-all
      flex
      '
    >
      <h1>Connect with PhantomWallet</h1>
      <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.yadawallets.com%2Fwp-content%2Fuploads%2F2021%2F06%2FPhantom-wallet-logo-200x200.png&f=1&nofb=1'
        width={logoSize}
        height={logoSize}
        alt=''
      />
    </button>
  )
}

export default PhantomWallet