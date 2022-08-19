import axios from 'axios'

interface AssetProps {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
}

const fetchAllAssets = async () => {
  const tickers = [
    "BTC",
    "ETH",
    "XMR",
    "SOL",
    "ADA",
    "BCH",
    "XRP",
    "BNB",
    "DOGE",
    "LTC",
  ]

  const assetDatas = await Promise.all(tickers.map(async (item) => {
    const metric_data_url = `https://data.messari.io/api/v1/assets/${item}/metrics`
    const profile_data_url = `https://data.messari.io/api/v2/assets/${item}/profile`
  
    const { data: metric_data } = await axios.get(metric_data_url);
    const { data: profile_data } = await axios.get(profile_data_url);
  
    const asset_data = metric_data["data"]
    const market_data = metric_data["data"]["market_data"]
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
  }))

  return assetDatas;
}

export default fetchAllAssets;