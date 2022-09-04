import React from 'react'
import { SiHiveBlockchain } from 'react-icons/si'
import { BsPiggyBankFill, BsCreditCard } from 'react-icons/bs'

const Result: React.FC = ({ data }: any) => {
  return (
    <div className='flex text-white'>
      {
        data.type === 'Block' ? <SiHiveBlockchain /> : null
      }
      {
        data.type === 'Address' ? <BsPiggyBankFill /> : null
      }
      {
        data.type === 'Transaction' ? <BsCreditCard /> : null
      }
      <h1>{data.ticker}</h1>
    </div>
  )
}

export default Result;