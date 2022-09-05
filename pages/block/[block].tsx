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
      <div className='flex text-white'>
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