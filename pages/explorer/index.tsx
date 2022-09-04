import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Search from '../../components/explorer/Search'
import fetchProfile from '../../data/explorer/fetchProfile'

const Explorer: NextPage = ({ btc_profile, eth_profile }: any) => {
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

export async function getServerSideProps() {
  const btc_profile = await fetchProfile('btc');
  const eth_profile = await fetchProfile('eth');

  return {
    props: {
      btc_profile,
      eth_profile
    }
  }
}

export default Explorer;