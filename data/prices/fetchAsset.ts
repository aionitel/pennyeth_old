import axios from 'axios';

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
}

const fetchAsset = async (ticker: string) => {
  const metric_url = `https://data.messari.io/api/v1/assets/${ticker}/metrics`
  const profile_url =`https://data.messari.io/api/v1/assets/${ticker}/profile` 

  const { data: metric_data } = await axios.get(metric_url);
  const { data: profile_data } = await axios.get(profile_url);

  const market_data = metric_data["data"]["market_data"];
}

export default fetchAsset;