import React from 'react'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { currPageAtom } from '../../state/atoms'

const Purchase = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)
  
  useEffect(() => setCurrPage('purchase'))

  return (
    <>
      <Head>
        <title>PennyETH  •  Buy / Sell</title>
      </Head>
      <div>Buy and Sell Page</div>
    </>
  )
}

export default Purchase