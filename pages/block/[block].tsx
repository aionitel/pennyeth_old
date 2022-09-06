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
      <div className='ml-20'>
        <div className='mt-8'><Search /></div>
        <div className='flex-row text-white'>
          <span className='flex'>
            {
              block.height === 0 ? <h1 className='text-3xl my-6'>Genesis Block</h1> : <h1 className='text-3xl my-6'>Block {block.height}</h1>
            }
            <BsFillInfoCircleFill className='mt-8 mx-4 text-chartGray' data-tip={<h1></h1>} />
            <ReactTooltip place='right'>
              <h1>Block at height <br /> {block.height.toLocaleString()} in the blockchain.</h1>
            </ReactTooltip>
          </span>
          <h1>This block was mined on {new Date(block.time).toDateString().slice(3, 15)} at {new Date(block.time).toLocaleTimeString()}.</h1>
        </div>
        <div className='flex-row text-white'>
          <h1>Hash: {block.hash}</h1>
          <h1>Height: {block.height}</h1>
          <h1>Confirmations: {block.depth.toLocaleString()}</h1>
          <h1>Nonce: {block.nonce}</h1>
          <h1>Merkle Root: {block.merkleRoot}</h1>
          <h1>Size: {block.size} (in bits)</h1>
          <h1>Previous Block: {block.prevBlock}</h1>
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