import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRecoilState } from 'recoil'
import { currPageAtom } from '../../state/atoms'
import { NextPage } from 'next'

const Prices: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('Prices'))

  return (
    <>
      <Head>
        <title>PennyETH  •  Prices</title>
      </Head>
      <div className='bg-black h-screen'>Prices Page</div>
    </>
  )
}

export default Prices