import React from 'react'
import { useRecoilValue } from 'recoil'
import { assetMetricsAtom } from '../../state/atoms'

const Collection: React.FC = () => {
  const assetData = useRecoilValue(assetMetricsAtom);

  return (
    <div className='flex-row border border-lightgray mt-2'>
      {
        assetData.map(item => (
          <CollectionItem 
            key=''
            name={item.name} 
            ticker={item.ticker}
            image={item.image}
            price={item.price} 
            dailyChange={item.dailyChange} 
            volume={item.volume} />
        ))
      }
    </div>
  )
}

interface CollectionItemProps {
  name: string,
  ticker: string,
  image: string,
  price: number,
  dailyChange: number,
  volume: number
}

const CollectionItem: React.FC<CollectionItemProps> = ({ name, ticker, image, price, dailyChange, volume }) => {
  const logoSize = 35;

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

  return (
    <div className='flex justify-between my-2'>
      <div className='flex'>
        <img src={image} alt='' style={{ height: logoSize , width: logoSize, marginTop: 2 }} className='mx-3' />
        <div>
          <h1>{name}</h1>
          <h1>{ticker}</h1>
        </div>
      </div>
      <h1 className='mr-20 pr-20'>${formatter.format(price)}</h1>
      {
        dailyChange < 0 ? <h1 className='text-red'>{formatter.format(dailyChange)}%</h1> : <h1 className='text-green-400'>{formatter.format(dailyChange)}%</h1>
      }
      <h1 className='mr-6'>{formatter.format(volume)} {ticker}</h1>
    </div>
  )
}

export default Collection