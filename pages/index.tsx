import { NextPage } from 'next'
import React from 'react'
import { currPageAtom } from '../state/atoms'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import Head from 'next/head'

const Home: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('Home'))

  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='h-screen bg-black'>
        <h1>Home page</h1>
      </div>
    </>
  )
}

export default Home