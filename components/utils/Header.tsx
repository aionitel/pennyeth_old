import React from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import { useRecoilValue } from 'recoil'
import { currUserAtom, currPageAtom } from '../../state/atoms'

const Header: React.FC = () => {
  const web3Api = useMoralisWeb3Api()

  const currUser = useRecoilValue(currUserAtom)
  const currPage = useRecoilValue(currPageAtom)

  return (
    <div className='flex h-20 w-screen'>
      {currPage}
      header
    </div>
  )
}

export default Header
