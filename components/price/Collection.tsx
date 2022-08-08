import React from 'react'
import { useRecoilValue } from 'recoil'
import { assetMetricsAtom } from '../../state/atoms'

const Collection: React.FC = () => {
  const assetData = useRecoilValue(assetMetricsAtom);

  return (
    <div className='flex-row border border-lightgray'>
      {
        assetData.map(item => (
          <CollectionItem 
            key=''
            name={item.name} 
            ticker={item.ticker}
            image={item.image}
            price={item.price} 
            hourChange={item.hourChange} 
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
  hourChange: number,
  dailyChange: number,
  volume: number
}

const CollectionItem: React.FC<CollectionItemProps> = ({ name, ticker, image, price, hourChange, dailyChange, volume }) => {
  const logoSize = 35;

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
 });

  return (
    <div className='flex justify-between my-2'>
      <div className='flex'>
        <img src={image} alt='' height={logoSize} width={logoSize} />
        <div>
          <h1>{name}</h1>
          <h1>{ticker}</h1>
        </div>
      </div>
      <h1>${formatter.format(price)}</h1>
      <h1>{formatter.format(dailyChange)}%</h1>
      <h1 className='mr-6'>{formatter.format(volume)} {ticker}</h1>
    </div>
  )
}

export default Collection