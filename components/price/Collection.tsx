import React from 'react'
import { useRecoilValue } from 'recoil'
import { assetMetricsAtom } from '../../state/atoms'

const Collection: React.FC = () => {
  const assetData = useRecoilValue(assetMetricsAtom);

  return (
    <div className='flex-row border border-lightgray'>
      <h1>Your assets</h1>
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

  return (
    <div className='flex'>
      <img src={image} alt='' height={logoSize} width={logoSize} />
      <div>
        <h1>{name}</h1>
        <h1>{ticker}</h1>
      </div>
    </div>
  )
}

export default Collection