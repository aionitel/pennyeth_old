import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import ListCard from '../../components/asset/ListCard'
import { useRecoilValue } from 'recoil'
import { allAssetsAtom } from '../../state/atoms'
import { useState } from 'react'

interface Asset {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
  marketDominance: number,
  supply: number,
  rank: number,
  stockToFlow: number,
  medianTxFee: number,
  allTimeHigh: number,
  hashRate: number,
  overview: string,
  desc: string,
  background: string,
  blockReward: number,
  consensusAlgorithm: string,
}

const Home: NextPage = () => {
  const DynamicCollection = dynamic(() => import('../../components/collection/Collection'), {ssr: false});

  const allAssets = useRecoilValue(allAssetsAtom);
  
  return (
    <>
      <Head>
        <title>PennyETH  •  Assets</title>
      </Head>
      <div className='flex bg-black'>
        <motion.div 
          className='flex flex-col items-center text-white px-7'
          exit={{ opacity:0 }}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration: 1 }}
        >
          <ListCard assets={allAssets.slice(0, 3)} />
          <ListCard assets={allAssets.slice(14, 17)} />
          <DynamicCollection />
        </motion.div>
      </div>
    </>
  )
}

export default Home