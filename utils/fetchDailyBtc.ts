import axios from 'axios';

const fetchDailyBtc = async () => {
  const url = 'https://data.messari.io/api/v1/assets/btc/metrics/market-data';

  const { data: res } = await axios.get(url);

  const percent = res.data.market_data.percent_change_usd_last_24_hours as number;

    // format percentage
    const percent_formatted = percent.toLocaleString();
    const final_change = percent_formatted.slice(0, percent_formatted.length -1)

    return final_change;
}

export default fetchDailyBtc;