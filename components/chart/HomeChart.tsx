import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'
import { getChartHeight, getChartWidth } from '../../data/utils/getDimensions';

interface HomeChartProps {
  data: any[],
  type: string
}

const HomeChart: React.FC<HomeChartProps> = ({ data, type }) => {
 return (
    <div className='flex'>
      <AreaChart
        height={getChartHeight()}
        width={getChartWidth()}
        data={data}
        margin={{ top: 0, right: 30, left: 30, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1552F0" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#1552F0" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis
          type='category'
          ticks={["jan", "feb"]}
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

export default HomeChart;