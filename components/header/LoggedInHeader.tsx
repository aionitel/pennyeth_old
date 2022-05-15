import React from 'react'
import { currUserAtom } from '../../state/atoms'
import { useRecoilValue } from 'recoil'

// when user has connected wallet, show wallet address in header

const LoggedInHeader = () => {
  const user = useRecoilValue(currUserAtom)
  
  return (
    <div className='flex-col text-center text-white border border-white rounded-3xl bg-green-400'>
      <h1>Connected</h1>
      <h2>{user}</h2>
    </div>
  )
}

export default LoggedInHeader