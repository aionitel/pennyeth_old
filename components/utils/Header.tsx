import React from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'

const Header: React.FC = () => {
  const web3Api = useMoralisWeb3Api()

  const currUser = useRecoilValue(currUserAtom)
  const currPage = useRecoilValue(currPageAtom)

  return (
    <div className='flex h-20 bg-black border-b border-lightgray'>
      <h1 className='text-white text-4xl'>{currPage}</h1>
      <div>
        <h1 className='text-white'>Wallet Connected</h1>
      </div>
    </div>
  )
}

export default Header