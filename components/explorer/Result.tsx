import React from 'react'

const Result: React.FC = ({ data }: any) => {
  return (
    <div className='text-white'>
      {
        data.hash
      }
    </div>
  )
}

export default Result;