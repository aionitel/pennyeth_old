import type { NextPage } from 'next'
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const Home: NextPage = () => {
  const { activateBrowserWallet, account } = useEthers()
  const userBalance = useEtherBalance(account)

  return (
    <div className='flex-row bg-blue'>
      {!account && <button onClick={activateBrowserWallet}>Connect</button>}
      {account && <h1 className=''>Account: {account}</h1>}
      {userBalance && <h1>Balance: {parseFloat(formatEther(userBalance)).toFixed(3)}</h1>}
    </div>
  )
}

export default Home
