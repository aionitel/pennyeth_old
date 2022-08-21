import type { NextPage } from 'next'
import { motion } from 'framer-motion'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Home: NextPage = () => {
  const DynamicCollection = dynamic(() => import('../../components/collection/Collection'), {ssr: false});
  
  return (
    <>
      <Head>
        <title>PennyETH  •  Assets</title>
      </Head>
      <div className='flex bg-black'>
        <motion.div 
          className='flex flex-col items-center text-white pl-7 pr-7'
          exit={{ opacity:0 }}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration: 1 }}
        >
          <DynamicCollection />
        </motion.div>
      </div>
    </>
  )
}

export default Home