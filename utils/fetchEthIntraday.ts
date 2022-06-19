import axios from 'axios';

const fetchEthIntraday = async () => {
  const eth_url = 'https://data.messari.io/api/v1/assets/eth/metrics'

  const { data: eth_response } = await axios.get(eth_url);

  // actual currennt price is behind many layers of data
  const eth_data = eth_response.data;
  const eth_price = eth_data.market_data.price_usd as number;
  
  // format price
  const eth_price_formatted = eth_price.toLocaleString();
  const final_price = eth_price_formatted.slice(0, eth_price_formatted.length -1)

  return final_price;
}

export default fetchEthIntraday;