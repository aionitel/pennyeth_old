import React from 'react'

interface Asset {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
  marketDominance: number,
  supply: number,
  rank: number,
  stockToFlow: number,
  medianTxFee: number,
  allTimeHigh: number,
  hashRate: number,
  overview: string,
  desc: string,
  background: string,
  blockReward: number,
  consensusAlgorithm: string,
}

interface ListCardProps {
  assets: Asset[]
}

const ListCard: React.FC<ListCardProps> = ({ assets }) => {
  return (
    <div>
      {
        assets.map(item => (
          <h1 key=''>{item.name}</h1>
        ))
      }
    </div>
  )
}

export default ListCard