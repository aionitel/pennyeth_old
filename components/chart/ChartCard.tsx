import React from 'react'
import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'
import { getChartHeight, getChartWidth } from '../../data/utils/getDimensions';

interface ChartCardProps {
  type: string
}

const ChartCard: React.FC<ChartCardProps> = ({ type }) => {
  return (
    <div className='flex text-white'>
      <AreaChart
        height={getChartHeight()}
        width={getChartWidth()}
        margin={{ top: 6, right: 10, left: 30, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1552F0" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#1552F0" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="date"
          type="category"
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip 
          labelStyle={{ color: '#8884d8' }} 
          formatter={value => new Intl.NumberFormat('en-US',
                    { style: 'currency', currency: 'USD',
                      minimumFractionDigits: 2 }).format(value)} />
        <Area dataKey={type} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  )
}

export default ChartCard