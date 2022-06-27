import React, { useState, useEffect } from 'react'
import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'
import axios from 'axios'

interface HomeChartProps {
  weeklyBtc: number[]
}

const HomeChart: React.FC<HomeChartProps> = ({ weeklyBtc }) => {
  return (
    <div>
      <AreaChart width={350} height={200} data={weeklyBtc}
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

export default HomeChart;