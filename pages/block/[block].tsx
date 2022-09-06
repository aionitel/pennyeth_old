import { NextPage } from 'next'
import Head from 'next/head';
import React from 'react'
import fetchBlock from '../../data/explorer/fetchBlock';
import { BsFillInfoCircleFill } from 'react-icons/bs'
import ReactTooltip from 'react-tooltip';
import Search from '../../components/explorer/Search';

interface Block {
  type: string;
  ticker: string;
  hash: string;
  height: number;
  nonce: number;
  size: number;
  bits: number;
  time: string;
  depth: number;
  txs: string[];
  prevBlock: string;
  merkleRoot: string;
}

const Block: NextPage = ({ block }: { block: Block }) => {
  return (
    <div>
      <Head>
        {
          block.height === 0 ? <title>PennyETH • Genesis Block</title> : <title>PennyETH • {block.height}</title>
        }
      </Head>
      <div className='ml-20 text-medGray'>
        <div className='mt-8 text-black'><Search /></div>
        <div className='flex-row'>
          <span className='flex'>
            {
              block.height === 0 ? <h1 className='text-3xl my-6 text-white'>Genesis Block</h1> : <h1 className='text-3xl my-6 text-white'>Block {block.height}</h1>
            }
            <BsFillInfoCircleFill className='mt-8 mx-4' data-tip={<h1></h1>} />
            <ReactTooltip place='right'>
              <h1>Block at height <br /> {block.height.toLocaleString()} in the blockchain.</h1>
            </ReactTooltip>
          </span>
          <span className='flex mb-4'>
            <h1>This block was mined on {new Date(block.time).toDateString().slice(3, 15)} at {new Date(block.time).toLocaleTimeString()}.</h1>
            {
              block.height === 0 ? <h1>(By Satoshi Nakamoto!)</h1> : null
            }
          </span>
        </div>
        <div className='flex-row'>
          <h1 className='py-2 border-b'>Hash: {block.hash}</h1>
          <h1 className='py-2 border-b'>Height: {block.height}</h1>
          <h1 className='py-2 border-b'>Confirmations: {block.depth.toLocaleString()}</h1>
          <h1 className='py-2 border-b'>Nonce: {block.nonce}</h1>
          <h1 className='py-2 border-b'>Merkle Root: {block.merkleRoot}</h1>
          <h1 className='py-2 border-b'>Size: {block.size} (in bits)</h1>
          <h1 className='py-2 border-b'>Previous Block: {block.prevBlock}</h1>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  // get block pertaining to page
  const block = await fetchBlock(context.query.ticker, context.query.block);

  return {
    props: { block }
  }
}

export default Block;