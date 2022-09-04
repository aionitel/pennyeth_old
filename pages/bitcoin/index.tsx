import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Search from '../../components/explorer/Search'

const Bitcoin: NextPage = () => {
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

export default Bitcoin