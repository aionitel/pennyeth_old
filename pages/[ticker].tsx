import { NextPage } from 'next'
import Head from 'next/head';
import AssetHeader from '../components/asset/AssetHeader';
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

const AssetPage: NextPage = ({ asset }: any) => {
  return (
    <div className='mx-20'>
      <Head>
        <title>PennyETH • {asset.name}</title>
      </Head>
      <div className='text-white mx-20'>
        <AssetHeader asset={asset} />
      </div>
    </div>
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