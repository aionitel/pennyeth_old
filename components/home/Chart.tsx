import React from 'react'
import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'

const Chart: React.FC = () => {

  const handleChartSize = () => {
    if (typeof window !== "undefined") {
      const width = screen.width;

      if (width <= 200) {
        return 350
      } else {
        return 800
      }
    }
  }

  return (
    <div>
      <AreaChart width={handleChartSize()} height={250} data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1552F0" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#1552F0" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
    </div>
  )
}

const data = [
  {
    "name": "Page A",
    "uv": 4000,
  },
  {
    "name": "Page B",
    "uv": 3000,
  },
  {
    "name": "Page C",
    "uv": 2000,
  },
  {
    "name": "Page D",
    "uv": 2780,
  },
  {
    "name": "Page E",
    "uv": 1890,
  },
  {
    "name": "Page F",
    "uv": 2390,
  },
]

export default Chart