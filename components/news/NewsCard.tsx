import Image from 'next/image';
import React from 'react'

interface NewsProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

const NewsCard: React.FC<NewsProps> = ({ title, authors, image, date, url }) => {
  return (
    <div className='flex border-2 border-lightgray'>
      <Image src={image} height={100} width={100} alt='' />
      <h1>{title}</h1>
    </div>
  )
}

export default NewsCard;