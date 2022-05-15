import React from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom } from '../../state/atoms'
import Image from 'next/image'

const Metmask: React.FC = () => {
  const { Moralis } = useMoralis()

  const [user, setUser] = useRecoilState(currUserAtom)

  const logoSize = 39; // metamask image size

  const handleLogin = async () => {
    const user = await Moralis.authenticate().catch(err => console.log(err))
  }

  return (
    <button
      onClick={() => handleLogin()}
      className='
      flex
      bg-gray 
      text-white 
      text-center 
      mx-14
      my-2
      py-2 px-2 
      rounded-lg 
      hover:scale-110 
      transition-all
      justify-center
      '
    >
      <h1 className='text-center'>Connect with Metamask</h1>
      <Image src='https://i.imgur.com/Ga5DEu3.png' width={logoSize} height={logoSize} alt='' />
    </button>
  )
}

export default Metmask
