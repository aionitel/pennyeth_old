import Link from 'next/link';
import React from 'react'

const TxCard: React.FC = ({ tx }: any) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h1>Hash</h1>
        <Link href={`/tx/${tx.hash}`} passHref>
          <h1 className='text-blue hover:underline hover:cursor-pointer hover:opacity-[0.9]'>{tx.hash}</h1>
        </Link>
      </div>
      {
        tx.inputs[0].output_index === -1 ? <h1>coinbase</h1> : null
      }
    </div>
  ) 
}

export default TxCard;