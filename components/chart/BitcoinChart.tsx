import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'
import { useRecoilValue } from 'recoil';
import { WeeklyBtcAtom } from '../../state/atoms';

const BitcoinChart: React.FC = () => {

  const weeklyBtc = useRecoilValue(WeeklyBtcAtom);
  
  return (
    <div>
      <AreaChart width={1050} height={300} data={weeklyBtc}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1552F0" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#1552F0" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <YAxis />
        <Tooltip formatter={value => new Intl.NumberFormat('en-US',
                        { style: 'currency', currency: 'USD',
                          minimumFractionDigits: 2 }).format(value)} />
        <Area dataKey="BTC" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </div>
  )
}

export default BitcoinChart;