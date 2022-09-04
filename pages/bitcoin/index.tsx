import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Search from '../../components/explorer/Search'
import fetchProfile from '../../data/explorer/fetchProfile'

const Bitcoin: NextPage = ({ profile }: any) => {
  return (
    <div>
      <Head>
        <title>PennyETH • Bitcoin</title>
      </Head>
      <div className='text-white'>
        <div className='ml-10 my-8 text-black'>
          <Search />
        </div>
        <h1>Network Info</h1>
        <h1>{profile.name}</h1>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const profile = await fetchProfile("btc");

  return {
    props: {
      profile
    }
  }
}

export default Bitcoin