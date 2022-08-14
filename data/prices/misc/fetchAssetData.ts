import axios from 'axios';

interface AssetProps {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
}

const fetchAssetData = async (ticker: string) => {
  const metric_url = `https://data.messari.io/api/v1/assets/${ticker}/metrics`
  const price_url = `https://data.messari.io/api/v1/assets/${ticker}/metrics/market-data`

  const { data: metric_data } = await axios.get(metric_url);
  const { data: price_data } = await axios.get(price_url);

  const asset_data = price_data["data"]["Asset"];
  const market_data = price_data["data"]["market_data"];
  const marketcap = metric_data["data"]["marketcap"];

  const asset: AssetProps = {
    name: asset_data["name"],
    ticker: asset_data.symbol,
    price: market_data.price_usd,
    image: null,
    dailyChange: market_data.percent_change_usd_last_24_hours,
    volume: market_data.volume_last_24_hours,
    marketCap: marketcap.current_marketcap_usd,
  }

  return asset;
}

export default fetchAssetData;