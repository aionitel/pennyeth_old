import axios from 'axios'

// need to parse res data into price data that recharts can use
interface Data {
  date: string,
  BTC: number,
}

// fetching ytd data for btc
const fetchWeeklyBtc = async () => {
  
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  const today = new Date();
  const year_start = new Date(2021, 0, 0);

  const btc_url = `https://data.messari.io/api/v1/assets/btc/metrics/price/time-series?start=${year_start.toString()}&end=${today.toString()}&interval=1d`

  const { data: btc_res } = await axios.get(btc_url);

  const data: Data[] = btc_res.data.values.map(item => {

    const date = today.toLocaleTimeString()

    return {
      "date": date,
      "BTC": item[4].toFixed(2)
    }
  })

  return data;
}

export default fetchWeeklyBtc;