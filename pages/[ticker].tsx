import { NextPage } from 'next'
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
    <div className='text-white'>
      {asset.name}
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