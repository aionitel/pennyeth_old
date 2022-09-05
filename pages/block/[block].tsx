import { NextPage } from 'next'
import Head from 'next/head';
import React from 'react'
import fetchBlock from '../../data/explorer/fetchBlock';

const Block: NextPage = ({ block }: any) => {
  return (
    <div>
      <Head>
        <title>PennyETH • Block {block.height}</title>
      </Head>
      <div className='flex-row text-white'>
        <h1>Block {block.height}</h1>
        <h1>This block was mined on {block.time.slice(0, 10)}</h1>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const block = await fetchBlock(context.query.ticker, context.query.block);

  return {
    props: { block }
  }
}

export default Block;