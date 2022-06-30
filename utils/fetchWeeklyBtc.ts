import axios from 'axios'

// need to parse res data into price data that recharts can use
interface Data {
  date: string,
  BTC: number,
  ETH: number
}

// fetching past weekly btc and eth data for consumption in HomeChart component
// will be called in getServerSideProps in home page, and then passed to HomeChart
const fetchWeeklyBtc = async () => {
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);

  const btc_url = `https://data.messari.io/api/v1/assets/btc/metrics/price/time-series?start=${oneMonthAgo.toString()}&end=${today.toString()}&interval=1d`
  const eth_url = `https://data.messari.io/api/v1/assets/eth/metrics/price/time-series?start=${oneMonthAgo.toString()}&end=${today.toString()}&interval=1d`

  const { data: btc_res } = await axios.get(btc_url);

  const data: Data[] = btc_res.data.values.map(item => {
    return item[4];
  })

  return data;
}

export default fetchWeeklyBtc;