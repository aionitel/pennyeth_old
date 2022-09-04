import React from 'react'
import { SiHiveBlockchain } from 'react-icons/si'
import { BsPiggyBankFill, BsCreditCard } from 'react-icons/bs'
import Link from 'next/link'
import Search from './Search'

const Result: React.FC = ({ data }: any) => {
  return (
    <Link href='/' passHref>
      <div className='flex text-white border p-5 hover:cursor-pointer hover:bg-almostBlack transition-all duration-300'>
        {
          data.type === 'Block' ? <SiHiveBlockchain className='text-3xl' /> : null
        }
        {
          data.type === 'Address' ? <BsPiggyBankFill /> : null
        }
        {
          data.type === 'Transaction' ? <BsCreditCard /> : null
        }
        <div className='flex mt-1 mx-2'>
          <h1 className='text-medGray'>{data.ticker.toUpperCase()}</h1>
          <h1 className='ml-8 mr-1'>{data.type}</h1>
          {
            data.height !== null ? <h1 className='mr-4'>{data.height}</h1> : null
          }
          {
            data.hash !== null ? <h1>({data.hash})</h1> : null
          }
        </div>
      </div>
    </Link>
  )
}

export default Result;