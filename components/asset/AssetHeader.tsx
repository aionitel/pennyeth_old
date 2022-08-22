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

interface AssetHeaderProps {
  asset: Asset
}

const logoSize = 40;

const AssetHeader: React.FC<AssetHeaderProps> = ({ asset }) => {
  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <img src={asset.image} height={logoSize} width={logoSize} />
        <h1>{asset.name}</h1>
        <h1>{asset.ticker}</h1>
      </div>
      <div>
        <h1>{asset.price}</h1>
      </div>
    </div>
  )
}

export default AssetHeader