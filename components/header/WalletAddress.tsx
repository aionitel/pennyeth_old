import React from 'react'
import { currUserAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'

// when user has connected wallet, show wallet address in header

const LoggedInHeader = () => {
  const [user, setUser] = useRecoilState(currUserAtom)
  
  return (
    <div className='flex-col text-center text-white border border-white rounded-3xl bg-green-400'>
      <h1>Connected</h1>
      <h2>{user}</h2>
      <button onClick={() => setUser("")}>
        <h1>Logout</h1>
      </button>
    </div>
  )
}

export default LoggedInHeader