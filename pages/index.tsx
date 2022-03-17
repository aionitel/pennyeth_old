import type { NextPage } from 'next'
import { useEthers } from '@usedapp/core'

const Home: NextPage = () => {
  const { activateBrowserWallet, account } = useEthers()

  return (
    <div className='flex justify-center'>
      {!account && <button onClick={() => activateBrowserWallet()}>Connect</button>}
      {account && <h1>Account: {account}</h1>}
    </div>
  )
}

export default Home
