import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom } from '../state/atoms'
import { useMoralisWeb3Api } from 'react-moralis'

const Home: NextPage = () => {
  const Web3Api = useMoralisWeb3Api()

  const [currUser, setCurrUser] = useRecoilState<any>(currUserAtom)
  const [balance, setBalance] = useState<string | null>(null)

  const [loading, setLoading] = useState<boolean>(false)

  const {
    authenticate,
    isAuthenticated,
    isWeb3Enabled,
    enableWeb3,
    Moralis,
    user,
    account,
    logout
  } = useMoralis()

  const handleGeneralLogin = async () => {
    if (!isAuthenticated) {
      setLoading(true)

      const user = await authenticate({ 
        provider: "walletconnect", chainId: 56
    })
    }
  }

  const handleMetamaskLogin = async () => {
    if (!isAuthenticated) {
      setLoading(true)

      const user = await authenticate()

      setCurrUser(Moralis.User.current())
    }
  }

  const handleLogout = async () => {
    await logout()
  }

  const getNFTS = async () => {
    const { result: nfts } = await Moralis.Web3API.token.searchNFTs({ q: 'Monkey', })

    console.log(nfts)
  }

  useEffect(() => {
    Moralis.start({ serverUrl: 'https://uub9lwbbgued.usemoralis.com:2053/server', appId: 'KJIRkUopo2HKK65pCzrRWTKHNCz5ZEyRU6jgKF1U' })

    getNFTS()
  }, [])

  return (
    <div className='bg-blue'>
      {!isAuthenticated && <button onClick={handleMetamaskLogin}>Connect with Metamask</button>}
      {!isAuthenticated && <button onClick={handleGeneralLogin}>Connect</button>}
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      {isAuthenticated && <h1>{currUser}</h1>}
    </div>
  )
}

export default Home