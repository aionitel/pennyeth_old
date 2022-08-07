import React from 'react'

const Collection: React.FC = () => {
  return (
    <div className='flex border-2 rounded'>
      <h1>Your assets</h1>
    </div>
  )
}

interface CollectionItemProps {
  name: string,
  ticker: string,
  icon: string,
  price: number,
  dailyChange: number,
  
}

const CollectionItem: React.FC = () => {
  return (
    <div>hello</div>
  )
}

export default Collection