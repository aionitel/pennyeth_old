import { currPageAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

const NFT: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom) 

  useEffect(() => setCurrPage('NFTs'))

  return (
    <>
      <Head>
        <title>PennyETH  •  NFTs</title>
      </Head>
      <div className='h-screen bg-black text-white'>
        NFT page
      </div>
    </>
  )
}

export default NFT