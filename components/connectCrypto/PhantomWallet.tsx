import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom } from '../../state/atoms'

const PhantomWallet: React.FC = () => {
  const { Moralis } = useMoralis()
  const [user, setUser] = useRecoilState(currUserAtom)

  const logoSize = 30; // phantom wallet logo size

  const handleLogin = async () => {
    const user = await Moralis.authenticate({ type: 'sol' })

    setUser(user?.get('solAddress')) // set user state to eth address
  }

  return (
    <button
      onClick={() => handleLogin()}
      className='
      flex
      bg-gray 
      text-white
      mx-14
      my-2
      px-2
      py-2
      rounded-lg 
      hover:scale-110 
      transition-all
      justify-center
      '
    >
      <h1 className='mr-2'>Connect with PhantomWallet</h1>
      <Image src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.yadawallets.com%2Fwp-content%2Fuploads%2F2021%2F06%2FPhantom-wallet-logo-200x200.png&f=1&nofb=1'
        width={logoSize}
        height={logoSize}
        alt=''
      />
    </button>
  )
}

export default PhantomWallet