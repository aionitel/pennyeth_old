import { NextPage } from 'next'
import React from 'react'
import { currPageAtom } from '../state/atoms'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('Home'))

  return (
    <>
      <Head>
        <title>PennyETH</title>
      </Head>
      <div
        className='bg-black h-screen text-white flex justify-center'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='my-4 text-3xl'
        >
          <h1>A Crypto Dashboard for Everyone.</h1>
        </motion.div>
      </div>
    </>
  )
}

export default Home