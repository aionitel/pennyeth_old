import React from 'react'
import { useRecoilValue } from 'recoil'
import { getChartWidth } from '../../data/utils/getDimensions'
import { allAssetsAtom } from '../../state/atoms'
import CollectionItem from './CollectionItem'

interface AssetProps {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number,
  marketCap: number,
  marketDominance: number,
  supply: number,
}

const Collection: React.FC = () => {
  const allAssets = useRecoilValue(allAssetsAtom);

  return (
    <div className='flex-row text-md'
      style={{
        width: getChartWidth() - 35,
      }}
    >
      <div className='flex justify-between my-4 ml-2 border-b border-lightgray pb-5'>
        <h1 className='ml-4'>Name</h1>
        <h1 className='mr-8 lg:mr-0'>Price</h1>
        <h1 className='hidden lg:block'>24h%</h1>
        <h1 className='mr-20 hidden lg:block'>Volume(24h)</h1>
        <h1 className='pr-6 hidden lg:block'>Market Cap</h1>
        <h1>Market Dominance</h1>
        <h1>Supply</h1>
      </div>
      {
        allAssets.map(item => (
          <div key='' className='my-2'>
            <CollectionItem 
              name={item.name} 
              ticker={item.ticker}
              image={item.image}
              price={item.price} 
              dailyChange={item.dailyChange} 
              volume={item.volume} 
              marketCap={item.marketCap}
              marketDominance={item.marketDominance}
              supply={item.supply}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Collection