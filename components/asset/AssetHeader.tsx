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

const imageSize = 75;

const AssetHeader: React.FC<AssetHeaderProps> = ({ asset }) => {
  return (
    <div className='flex ml-6 justify-between max-w-screen-md w-screen'>
      <div className='flex'>
        <img src={asset.image} height={imageSize} width={imageSize} />
         <h1 className='mt-5 mx-2 text-3xl'>{asset.name}</h1>
          <h1 className='text-medGray mt-7 ml-2 bg-almostBlack px-2 mb-5 rounded-md'>{asset.ticker}</h1>
      </div>
      <div>
        <div>
          <h1>{asset.name} Price</h1>
          <div className='flex'>
            <h1>{asset.price}</h1>
            <h1>{asset.dailyChange.toFixed(2)}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetHeader;