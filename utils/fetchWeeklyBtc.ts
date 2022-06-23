import axios from 'axios'

// fetching past weekly btc data for consumption in HomeChart component
// will be called in getServerSideProps in home page, and then passed to HomeChart
const fetchWeeklyBtc = async () => {
  const today = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const url = `https://data.messari.io/api/v1/assets/bitcoin/metrics/price/time-series?start=${oneWeekAgo.toString()}&end=${today.toString()}&interval=1d`

  const { data: res } = await axios.get(url);

  return res.data.values;
}

export default fetchWeeklyBtc;