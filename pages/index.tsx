import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { currPageAtom } from '../state/atoms'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Chart from '../components/home/Chart'

const Home: NextPage = () => {
  const [currPage, setCurrPage] = useRecoilState(currPageAtom)

  useEffect(() => setCurrPage('Assets')) // set currPage on mount (this is on every other page aswell)

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
          <Chart />
        </motion.div>
      </div>
    </>
  )
}

export default Home