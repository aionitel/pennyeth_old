import React, { useState } from 'react'

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  }

  const handleSubmit  = () => {
    console.log(query);
  }

  return (
    <form method='GET' className='flex' action={`/explorer/${query}`} >
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