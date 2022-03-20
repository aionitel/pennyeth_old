import React from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'

const Header = () => {
  const web3Api = useMoralisWeb3Api()

  const currUser = useRecoilValue(currUserAtom)
  const currPage = useRecoilValue(currPageAtom)
  
  if (!currUser) { // if user wallet is not connected
    return (
      <div className='justify-between bg-black items-center text-white h-20 hidden sm:flex border-b border-lightgray'>
        <h1 className='text-4xl ml-10'>{currPage}</h1>
        <button className='bg-blue rounded-xl'>
          <h1 className='p-2'>Connect</h1>
        </button>
      </div>
    )
  } else { // if user wallet is connected
    return (
      <div></div>
    )
  }
}

export default Header