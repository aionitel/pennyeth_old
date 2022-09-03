import { NextPage } from 'next'
import Head from 'next/head';
import React from 'react'
import Search from '../../components/explore/Search';

const Ethereum: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PennyETH • Bitcoin</title>
      </Head>
      <div>
        <Search />
      </div>
    </div>
  )
}

export default Ethereum;