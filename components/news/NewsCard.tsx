import Link from 'next/link';
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface NewsProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

const NewsCard: React.FC<NewsProps> = ({ title, authors, image, date, url }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <Link href={url} passHref >
      <a target='_blank' rel="noopener noreferrer" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <div className='flex-row hover:cursor-pointer hover:underline mx-2'>
          <div className='overflow-hidden'>
            <motion.img 
              src={image} 
              alt='' 
              className='mb-2 transition-all duration-500 overflow-hidden'
              style={{
                scale: hover ? 1.1 : 1
              }}
            />
          </div>
          <h1 className='my-2'>{title}</h1>
          <div className='flex justify-between'>
            <h2>{authors}</h2>
            <h2>{date}</h2>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default NewsCard;