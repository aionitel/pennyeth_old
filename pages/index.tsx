import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom, currPageAtom } from '../state/atoms'
import Image from 'next/image'
import Head from 'next/head'

const logoSize = 25;

const Home: NextPage = () => {
  const { Moralis } = useMoralis() // root component to Moralis

  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  const handleLogin = async () => {
    const user = await Moralis.authenticate({ type: 'sol' })
  }

  useEffect(() => setCurrPage('Assets'))

  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div className='flex justify-between'>
        <div className='flex flex-col items-center'>
          Assets Page
        </div>
        <div>
          hello
        </div>
      </div>
    </>
  )
}

export default Home