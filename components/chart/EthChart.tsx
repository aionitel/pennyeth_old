import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'
import { getChartHeight, getChartWidth } from '../../data/utils/getDimensions';

interface HomeChartProps {
  data: any[],
  type: string
}

const EthChart: React.FC<HomeChartProps> = ({ data, type }) => {
 return (
    <div>
      <AreaChart
        height={getChartHeight()}
        width={getChartWidth()}
        data={data}
        margin={{ top: 0, right: 10, left: 30, bottom: 0 }}>
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

export default EthChart;