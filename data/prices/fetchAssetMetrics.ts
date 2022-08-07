import axios from 'axios';

interface AssetProps {
  name: string,
  ticker: string,
  image: string,
  price: number,
  hourChange: number,
  dailyChange: number,
  volume: number
}

const fetchAssetMetrics = async (ticker: string) => {
  const url = `https://data.messari.io/api/v1/assets/${ticker}/metrics/market-data`

  const { data: res } = await axios.get(url);

  const asset_data = res["data"]["Asset"];
  const market_data = res["data"]["market_data"];

  const asset: AssetProps = {
    name: asset_data["name"],
    ticker: asset_data.symbol,
    price: market_data.price_usd,
    image: null,
    hourChange: market_data.percent_change_usd_last_1_hour,
    dailyChange: market_data.percent_change_usd_last_24_hours,
    volume: market_data.volume_last_24_hours
  }

  return asset;
}

export default fetchAssetMetrics;