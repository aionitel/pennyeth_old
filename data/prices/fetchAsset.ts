import axios from 'axios';
import { logos } from '../images/images';

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

const fetchAsset = async (ticker: string) => {
  const metric_url = `https://data.messari.io/api/v1/assets/${ticker}/metrics`
  const profile_url =`https://data.messari.io/api/v1/assets/${ticker}/profile` 

  const { data: metric_data } = await axios.get(metric_url);
  const { data: profile_data } = await axios.get(profile_url);

  const asset: Asset = {
    name: profile_data["data"]["name"],
    ticker: profile_data["data"]["symbol"],
    image: logos[profile_data["data"]["symbol"]],
    
  }
}

export default fetchAsset;