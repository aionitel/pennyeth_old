import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'
import { useRecoilValue } from 'recoil';
import { WeeklyBtcAtom } from '../../state/atoms';

const BitcoinChart: React.FC = () => {
  const weeklyBtc = useRecoilValue(WeeklyBtcAtom);

  const getChartWidth = () => {
    if (screen.height <= 800) { // 400 around mobile phone width
      return 390
    } else if (screen.height <= 900 ) { // laptops and small screens
      return 800
    } else if (screen.height <= 1100) { // large monitors and displays
      return 1200
    }
  }

  const getChartHeight = () => {
    if (screen.height <= 800) {
      return 150
    } else if (screen.height <= 900 ) {
      return 300
    } else if (screen.height <= 1100) {
      return 375
    }
  }
  
  return (
    <div className='flex'>
      <AreaChart
        height={getChartHeight()}
        width={getChartWidth()}
        data={weeklyBtc}
        margin={{ top: 0, right: 25, left: 25, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1552F0" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#1552F0" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis
          type='category'
          ticks={["jan", "feb"]}
          domain={["jan", "feb"]}
        />
        <CartesianGrid strokeDasharray="3 3" />
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