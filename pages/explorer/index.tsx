import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Search from '../../components/explore/Search'

const Bitcoin: NextPage = () => {
  return (
    <div className='flex-row bg-black h-screen'>
      <Head>
        <title>PennyETH • Explorer</title>
      </Head>
      <div className='ml-5 my-10'>
        <Search />
      </div>
      <div className='text-white'>
        <h1>Supported Chains</h1>
      </div>
    </div>
  )
}

export default Bitcoin