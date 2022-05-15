import React from 'react'
import { currUserAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'

// when user has connected wallet, show wallet address in header

const LoggedInHeader = () => {
  const [user, setUser] = useRecoilState(currUserAtom)
  
  return (
    <div className='flex-col text-base text-center text-white border border-white rounded-3xl bg-black'>
      <h1 className='text-green-500'>Connected</h1>
      <h1>{user.slice(0, 12)}...</h1>
      <button onClick={() => setUser("")}>
        <h1>Logout</h1>
      </button>
    </div>
  )
}

export default LoggedInHeader