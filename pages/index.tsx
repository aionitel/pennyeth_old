import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useRecoilState } from 'recoil'
import { currUserAtom, currPageAtom } from '../state/atoms'
import { motion } from 'framer-motion'
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
      <div className='flex justify-between bg-black h-screen'>
        <motion.div 
          className='flex flex-col items-center text-white'
          exit={{ opacity:0 }}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
        >
          Assets Page
        </motion.div>
        <div>
          hello
        </div>
      </div>
    </>
  )
}

export default Home