import React from 'react'

const TxCard: React.FC = ({ tx }: any) => {
  return (
    <div>
      <h1>Hash {tx.hash}</h1>
    </div>
  )
}

export default TxCard;