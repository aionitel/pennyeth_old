import axios from 'axios';

const fetchPrices = async () => {
  const btc_url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${process.env.API_KEY}`;
  const eth_url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${process.env.API_KEY}`;

  const btc_response = await axios.get(btc_url);
  const eth_response = await axios.get(eth_url);
}

export default fetchPrices;