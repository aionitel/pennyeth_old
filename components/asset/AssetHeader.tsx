import React from 'react'
import  { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'

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

  const formatter = new Intl.NumberFormat('en', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

  return (
    <div className='flex ml-6 justify-between max-w-screen-md w-screen'>
      <div className='flex'>
        <img src={asset.image} height={imageSize} width={imageSize} />
         <h1 className='mt-5 mx-2 text-3xl'>{asset.name}</h1>
          <h1 className='text-medGray mt-7 ml-2 bg-almostBlack px-2 mb-5 rounded-md'>{asset.ticker}</h1>
      </div>
      <div>
        <div>
          <h1 className='text-sm text-chartGray ml-2'>{asset.ticker}/USD Price</h1>
          <div className='flex text-3xl'>
            <h1 className='mt-2 mx-2'>${formatter.format(asset.price)}</h1>
            {
              asset.dailyChange > 0 ? <div className='flex text-lg bg-almostBlack rounded text-green-400 mt-2 px-1 py-1'><RiArrowUpSFill className='mt-2' /><h1>{asset.dailyChange.toFixed(2)}%</h1></div>
              : <div className='flex text-lg bg-almostBlack rounded text-red mt-2 px-1 py-1'><RiArrowDownSFill className='mt-2' /><h1>{asset.dailyChange.toFixed(2)}%</h1></div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssetHeader;