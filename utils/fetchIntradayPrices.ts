import axios from 'axios';

const fetchIntradayPrices = async () => {
  const btc_url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${process.env.API_KEY}`;
  const eth_url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${process.env.API_KEY}`;

  const btc_response = await axios.get(btc_url);
  const eth_response = await axios.get(eth_url);

  const btc_price = btc_response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
  const eth_price = eth_response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'];

  return { btc_price, eth_price };
}

export default fetchIntradayPrices;