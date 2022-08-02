import React from 'react'
import { useRecoilValue } from 'recoil'
import { DailyBtcAtom, DailyEthAtom } from '../../state/atoms'

interface DailyTextProps {
  type: string,
}

const DailyText: React.FC<DailyTextProps> = ({ type }) => {
  const dailyBtc = useRecoilValue(DailyBtcAtom);
  const dailyEth = useRecoilValue(DailyEthAtom);

  return (
    <h1 className='inline-block'>
      {
        type === 'BTC' ? dailyBtc < 0 ? <h1 className='text-red'>down {dailyBtc}%</h1> : <h1 className='text-green-400'>up {dailyBtc}%</h1> : null
      }
      {
        type === 'ETH' ? dailyEth < 0 ? <h1 className='text-red'>down {dailyEth}%</h1> : <h1 className='text-green-400'>up {dailyEth}%</h1> : null
      }
      </h1>
  )
}

export default DailyText