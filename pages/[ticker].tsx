import { NextPage } from 'next'
import Head from 'next/head';
import fetchAsset from '../data/prices/fetchAsset';

interface Asset {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
  marketDominance: number,
  supply: number,
  rank: number,
  stockToFlow: number,
  medianTxFee: number,
  allTimeHigh: number,
  hashRate: number,
  overview: string,
  desc: string,
  background: string,
  blockReward: number,
  consensusAlgorithm: string,
}

const logoSize = 40;

const AssetPage: NextPage = ({ asset }: any) => {
  return (
    <>
      <Head>
        <title>PennyETH • {asset.name}</title>
      </Head>
      <div className='text-white'>
        <div className='flex justify-between'>
          <div className='flex'>
            <img src={asset.image} height={logoSize} width={logoSize} />
            <h1>{asset.name}</h1>
          </div>
          <h1>${asset.price.toLocaleString()}</h1>
        </div>
        <h1>{asset.rank}</h1>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const ticker = context.params.ticker as string;
  const asset = await fetchAsset(ticker);

  return {
    props: {
      asset
    }
  }
}

export default AssetPage;