import React from 'react'
import { currPageAtom } from '../../state/atoms'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import Head from 'next/head'

const Transfer = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('Send / Receive'))

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