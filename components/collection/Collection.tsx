import React, { useEffect, useState } from 'react'
import  { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import { getChartWidth } from '../../data/utils/getDimensions'
import Link from 'next/link'
import fetchAllAssets from '../../data/prices/all/fetchAllAssets'
import { useRecoilValue } from 'recoil'
import { allAssetsAtom } from '../../state/atoms'

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
  const assets = allAssets.slice(0, 14)

  return (
    <div className='flex-row text-md'
      style={{
        width: getChartWidth() - 35,
      }}
    >
      <div className='flex justify-between text-sm my-4 ml-2 border-t pt-5 border-lightgray'>
        <h1 className='ml-4'>Name</h1>
        <h1 className='mr-8'>Price</h1>
        <h1 className='hidden lg:block'>24h%</h1>
        <h1 className='hidden lg:block'>Volume(24h)</h1>
        <h1 className='pr-6 hidden lg:block'>Market Cap</h1>
        <h1>Market Dominance</h1>
        <h1>Supply</h1>
      </div>
      {
        assets.map(item => (
          <div key='' className='border-y border-lightgray border-dashed hover:cursor-pointer hover:bg-darkGray'>
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

const CollectionItem: React.FC<AssetProps> = ({ name, ticker, image, price, dailyChange, volume, marketCap, marketDominance, supply }) => {
  const logoSize = 30;

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

  return (
    <Link href={`/${ticker.toLowerCase()}`} passHref>
      <div className='flex justify-between text-sm py-5'>
        <div className='flex'>
          <img src={image} alt='' style={{ height: logoSize , width: logoSize, marginTop: 5 }} className='mx-3' />
          <div>
            <h1>{name}</h1>
            <h1 className='text-sm opacity-[0.7]'>{ticker}</h1>
          </div>
        </div>
        <div>
          <h1 className='pt-2'>${formatter.format(price)}</h1>
        </div>
        {
          dailyChange < 0 ? <div className='hidden lg:flex'><RiArrowDownSFill className='mt-1 text-2xl text-red' /><h1 className='text-red hidden lg:flex pt-1'>{formatter.format(dailyChange)}%</h1></div> 
          : <div className='hidden lg:flex'><RiArrowUpSFill className='hidden lg:flex mt-1 text-2xl text-green-400' /><h1 className='text-green-400 hidden lg:flex pt-1'>{formatter.format(dailyChange)}%</h1></div>
        }
        <h1 className='hidden lg:flex'>{Math.floor(volume).toLocaleString()} {ticker}</h1>
        <h1 className='hidden lg:flex'>${Math.floor(marketCap).toLocaleString()}</h1>
        <h1>{marketDominance.toFixed(2)}%</h1>
        <h1>{supply.toLocaleString()}</h1>
      </div>
    </Link>
  )
}

export default Collection