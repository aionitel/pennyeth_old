import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [ticker, setTicker] = useState<string>("BTC");

  const options = ["BTC", "ETH", "DASH", "DOGE", "LTC"];

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const handleSubmit  = () => {
    console.log(query);
  }

  return (
    <form method='GET' className='flex' action={`/explorer/${query}`} >
      <Dropdown options={options} placeholder={options[0]} value={ticker} onChange={(e) => setTicker(e.value)} />;
      <input
        className='max-w-screen-xl w-screen rounded-sm pl-2'
        type='text'
        placeholder='Search Block / Address / Transaction'
        onChange={handleChange}
        value={query}
      >
      </input>
    </form>
  )
}

export default Search