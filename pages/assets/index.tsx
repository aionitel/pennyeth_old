import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Collection from '../../components/collection/Collection'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PennyETH  •  Assets</title>
      </Head>
      <div className='flex bg-black mx-20'>
        <motion.div 
          className='flex flex-col items-center text-white mx-20'
          exit={{ opacity:0 }}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
        >
          <Collection />
        </motion.div>
      </div>
    </>
  )
}

export default Home