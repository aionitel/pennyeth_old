import axios from 'axios'

// need to parse res data into price data that recharts can use
interface Data {
  date: string,
  BTC: number,
}

// fetching ytd data for btc
// will be called in getServerSideProps in home page, and then passed to HomeChart
const fetchWeeklyBtc = async () => {
  const today = new Date();
  const year_start = new Date(2022, 0, 0);

  const btc_url = `https://data.messari.io/api/v1/assets/btc/metrics/price/time-series?start=${year_start.toString()}&end=${today.toString()}&interval=1w`

  const { data: btc_res } = await axios.get(btc_url);

  const data: Data[] = btc_res.data.values.map(item => {
    return {
      "date": year_start.setDate(year_start.getDate() + 14),
      "BTC": item[4].toFixed(2)
    }
  })

  return data;
}

export default fetchWeeklyBtc;