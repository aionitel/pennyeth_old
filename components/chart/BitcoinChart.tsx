import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'
import { useRecoilValue } from 'recoil';
import { WeeklyBtcAtom } from '../../state/atoms';
import { useState } from 'react';

const BitcoinChart: React.FC = () => {
  const weeklyBtc = useRecoilValue(WeeklyBtcAtom);
  
  return (
    <div className='flex lg:mx-5 lg:border lg:border-lightgray lg:rounded-2xl'>
      <AreaChart
        height={ screen.width <= 400 ? 300 : 350}
        width={ screen.width <= 400 ? 350 : 1050}
        data={weeklyBtc}
        margin={{ top: 30, right: 25, left: 20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1552F0" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#1552F0" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey='date' />
        <Tooltip 
          labelStyle={{ color: '#8884d8' }} 
          formatter={value => new Intl.NumberFormat('en-US',
                    { style: 'currency', currency: 'USD',
                      minimumFractionDigits: 2 }).format(value)} />
        <Area dataKey="BTC" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  )
}

export default BitcoinChart;