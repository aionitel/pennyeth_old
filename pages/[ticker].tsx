import { NextPage } from 'next'
import Head from 'next/head';
import AssetHeader from '../components/asset/AssetHeader';
import YearChart from '../components/chart/YearChart';
import fetchAsset from '../data/prices/metric/fetchAsset';
import fetchDailyAsset from '../data/prices/time/fetchDailyAsset';

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

const AssetPage: NextPage = ({ asset, weeklyAsset }: any) => {
  return (
    <div className='mx-20'>
      <Head>
        <title>PennyETH • {asset.name}</title>
      </Head>
      <div className='text-white mx-20'>
        <AssetHeader asset={asset} />
      </div>
      <YearChart data={weeklyAsset} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const ticker = context.params.ticker as string;
  const asset = await fetchAsset(ticker);
  const weeklyAsset = await fetchDailyAsset(context.params.ticker);

  return {
    props: {
      asset,
      weeklyAsset
    }
  }
}

export default AssetPage;