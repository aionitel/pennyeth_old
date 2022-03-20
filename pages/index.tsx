import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom, currPageAtom } from '../state/atoms'
import { useMoralisWeb3Api } from 'react-moralis'
import Image from 'next/image'

const logoSize = 25;

const Home: NextPage = () => {
  const Web3Api = useMoralisWeb3Api()

  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => {
    setCurrPage('Assets')
  }, [])

  return (
    <div className='flex h-screen bg-black text-white'>
      Assets page
    </div>
  )
}

export default Home