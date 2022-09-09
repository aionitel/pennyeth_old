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

interface AssetPageProps {
  asset: Asset;
  weeklyAsset: any
}

const allowedChart = [
  "BTC",
  "ADA",
  "USDT",
  "XRP",
  "XMR",
  "DOGE",
]

const AssetPage: NextPage<AssetPageProps> = ({ asset, weeklyAsset }) => {
  return (
    <div className='pt-12 h-screen'>
      <Head>
        <title>PennyETH • {asset.name}</title>
      </Head>
      <div className='text-white'>
        <div className='mb-10'>
          <AssetHeader asset={asset} />
        </div>
        {
          allowedChart.includes(asset.ticker) ? <YearChart data={weeklyAsset} /> : null
        }
      </div>
      <div className='text-white'>
        <h1>test</h1>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const ticker = context.params.ticker as string;
  const asset = await fetchAsset(ticker);
  const weeklyAsset = await fetchDailyAsset(ticker);

  return {
    props: {
      asset,
      weeklyAsset
    }
  }
}

export default AssetPage;