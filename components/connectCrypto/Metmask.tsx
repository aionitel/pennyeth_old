import React from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom } from '../../state/atoms'

const Metmask: React.FC = () => {
  const { Moralis } = useMoralis()

  const [user, setUser] = useRecoilState(currUserAtom)

  const handleLogin = async () => {
    const user = await Moralis.authenticate().catch(err => console.log(err))

    console.log(Moralis.User.current())
  }

  return (
    <button
      onClick={() => handleLogin()}
      className='
      bg-gray 
      text-white 
      text-center 
      mx-14
      my-4
      py-2 px-2 
      rounded-lg 
      hover:scale-110 
      transition-all'
    >
      <h1>Connect with Metamask</h1>
    </button>
  )
}

export default Metmask
