import React from 'react'
import { useMoralisWeb3Api } from 'react-moralis'

const Header: React.FC = () => {
  const web3Api = useMoralisWeb3Api()

  return (
    <div>
      header
    </div>
  )
}

export default Header
