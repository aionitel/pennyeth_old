import axios from 'axios'

// need to parse res data into price data that recharts can use
interface Data {
  date: string,
  ETH: number,
}

// fetching ytd data for btc
const fetchWeeklyEth = async () => {
  const today = new Date();
  const year_start = new Date(2021, 0, 0);

  const url = `https://data.messari.io/api/v1/assets/eth/metrics/price/time-series?start=${year_start.toString()}&end=${today.toString()}&interval=1d`

  const { data: res } = await axios.get(url);

  const data: Data[] = res.data.values.map(item => {

    const date = today.toLocaleTimeString()

    return {
      "date": date,
      "ETH": item[4].toFixed(2)
    }
  })

  return data;
}

export default fetchWeeklyEth;