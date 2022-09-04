import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Search from '../../components/explorer/Search'
import fetchProfile from '../../data/explorer/fetchProfile'

const Explorer: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PennyETH • Explorer</title>
      </Head>
      <div className='text-white'>
        <div className='ml-10 my-8 text-black'>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Explorer;