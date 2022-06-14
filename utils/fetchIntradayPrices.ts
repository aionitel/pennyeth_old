import axios from 'axios';

const fetchIntradayPrices = async () => {
  const btc_url = 'https://data.messari.io/api/v1/assets/btc/metrics';
  const eth_url = 'https://data.messari.io/api/v1/assets/eth/metrics'

  const { data: btc_response } = await axios.get(btc_url);

  // actual currennt price is behind many layers of data
  const btc_data = btc_response.data;
  const btc_price = btc_data.market_data.price_usd as number;

  return btc_price;
}

export default fetchIntradayPrices;