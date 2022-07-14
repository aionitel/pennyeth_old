import Image from 'next/image';
import Link from 'next/link';
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
    <Link href={url} passHref >
      <a target='_blank' rel="noopener noreferrer">
        <div className='flex border-2 border-lightgray hover:cursor-pointer'>
          <Image src={image} height={100} width={100} alt='' />
          <h1>{title}</h1>
        </div>
      </a>
    </Link>
  )
}

export default NewsCard;