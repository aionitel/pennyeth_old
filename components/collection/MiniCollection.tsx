import React from 'react'
import { useRecoilValue } from 'recoil'
import  { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri'
import { getChartWidth } from '../../data/utils/getDimensions'
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

const MiniCollection: React.FC = () => {
  const allAssets = useRecoilValue(allAssetsAtom);
  const assets = allAssets.slice(0, 5)  

  return (
    <div className='flex-row border-2 border-chartGray border-dashed rounded ml-7 lg:mr-5 mr-2'
      style={{
        width: getChartWidth() - 35,
      }}
    >
      <div className='flex justify-between my-4 ml-2'>
        <h1 className='ml-4'>Name</h1>
        <h1 className='mr-8 lg:mr-0'>Price</h1>
        <h1 className='hidden lg:block'>24h%</h1>
        <h1 className='mr-20 hidden lg:block'>Volume(24h)</h1>
        <h1 className='pr-6 hidden lg:block'>Market Cap</h1>
      </div>
      {
        assets.map(item => (
          <CollectionItem 
            key=''
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

const CollectionItem: React.FC<AssetProps> = ({ name, ticker, image, price, dailyChange, volume, marketCap, }) => {
  const logoSize = 40;

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

  return (
    <div className='flex justify-between py-2 hover:cursor-pointer hover:bg-slate-900 text-lg'>
      <div className='flex'>
        <img src={image} alt='' style={{ height: logoSize , width: logoSize, marginTop: 5 }} className='mx-3' />
        <div>
          <h1>{name}</h1>
          <h1 className='text-sm opacity-[0.7]'>{ticker}</h1>
        </div>
      </div>
      <div>
        <h1>${formatter.format(price)}</h1>
      </div>
      {
        dailyChange < 0 ? <div className='hidden lg:flex'><RiArrowDownSFill className='mt-1 text-2xl text-red' /><h1 className='text-red hidden lg:flex'>{formatter.format(dailyChange)}%</h1></div> 
        : <div className='hidden lg:flex'><RiArrowUpSFill className='hidden lg:flex mt-1 text-2xl text-green-400' /><h1 className='text-green-400 hidden lg:flex'>{formatter.format(dailyChange)}%</h1></div>
      }
      <h1 className='hidden lg:flex mr-6'>{Math.floor(volume).toLocaleString()} {ticker}</h1>
      <h1 className='hidden lg:flex mr-4'>${Math.floor(marketCap).toLocaleString()}</h1>
    </div>
  )
}

export default MiniCollection;