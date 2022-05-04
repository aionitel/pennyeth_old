import React from 'react'
import { currPageAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

const Transfer: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('Transfer'))

  return (
    <>
      <Head>
        <title>PennyETH  •  Send / Recieve</title>
      </Head>
      <div className='h-screen bg-black'>
        <h1>Transfer page</h1>
      </div>
    </>
  )
}

export default Transfer