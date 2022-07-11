import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  Assets</title>
      </Head>
      <div className='flex bg-black h-screen'>
        <motion.div 
          className='flex flex-col items-center text-white'
          exit={{ opacity:0 }}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
        >
        </motion.div>
      </div>
    </>
  )
}

export default Home