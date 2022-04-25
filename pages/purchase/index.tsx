import React from 'react'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { currPageAtom } from '../../state/atoms'
import { NextPage } from 'next'

const Purchase: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)
  
  useEffect(() => setCurrPage('Buy / Sell'))

  return (
    <>
      <Head>
        <title>PennyETH  •  Buy / Sell</title>
      </Head>
      <div className='bg-black h-screen'>Buy and Sell Page</div>
    </>
  )
}

export default Purchase