import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface NewsProps {
  title: string,
  image: string,
  date: string,
  url: string,
}

const NewsImageSize = 140;

const NewsCard: React.FC<NewsProps> = ({ title, image, date, url }) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <a href={url} target='_blank' rel="noopener noreferrer" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <div className='flex-row hover:cursor-pointer hover:underline mx-2 w-18'>
        <div className='overflow-hidden'>
          <motion.img 
            src={image} 
            alt='' 
            className='mb-2 transition-all duration-500 overflow-hidden'
            style={{
              scale: hover ? 1.1 : 1,
              height: NewsImageSize,
              width: NewsImageSize
            }}
          />
        </div>
        <h1 className='my-2'>{title}</h1>
        <div className='flex justify-between'>
          <h2>{date}</h2>
        </div>
      </div>
    </a>
  )
}

export default NewsCard;