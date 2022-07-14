import axios from 'axios';

// for getting the daily percent change for BTC
const fetchDailyBtc = async () => {
  const url = 'https://data.messari.io/api/v1/assets/btc/metrics/market-data';

  const { data: res } = await axios.get(url);

  const percent = res.data.market_data.percent_change_usd_last_24_hours as number;

  // only get 2 decimal places without turning percent into a string
  const percent_formatted = Math.round(percent * 100) / 100;

  return percent_formatted;
}

export default fetchDailyBtc;