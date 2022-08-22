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
  title: string,
  assets: Asset[]
}

const logoSize = 20;

const ListCard: React.FC<ListCardProps> = ({ title, assets }) => {
  return (
    <div className='flex-row mx-20 bg-lightgray rounded-xl'>
      <h1 className='text-lg m-5'>Top {title}</h1>
      {
        assets.map((item, index) => (
          <div key='' className='flex justify-between my-2 text-sm hover:cursor-pointer'>
            <div className='flex mx-5'>
              <h1 className='mr-4 text-darkGray'>{index + 1}</h1>
              <img src={item.image} height={logoSize} width={logoSize} className='mr-2 pb-1' />
              <h1>{item.name}</h1>
            </div>
            <div className='ml-20 mr-4'>
              {
                item.dailyChange < 0 ? <h1 className='text-red'>{item.dailyChange.toFixed(2)}%</h1> : <h1 className='text-green-400'>{item.dailyChange.toFixed(2)}%</h1>
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ListCard