import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import images from '../../data/images/images';

interface NewsProps {
  title: string,
  image: string,
  date: string,
  url: string,
}

const NewsImageSize = 350 ;

const NewsCard: React.FC<NewsProps> = ({ title, image, date, url }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [cover, setCover] = useState<string>("");

  window.onload = function() {
    setCover(images[Math.floor(Math.random() * images.length)]);

    console.log("setting images");
  }

  return (
    <a href={url} target='_blank' rel="noopener noreferrer" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <div className='flex-row hover:cursor-pointer hover:underline mx-2'>
        <div className='overflow-hidden'>
          <motion.img 
            src={image} 
            alt='' 
            className='mb-2 transition-all duration-500 overflow-hidden'
            style={{
              scale: hover ? 1.1 : 1,
              height: NewsImageSize - 150,
              width: NewsImageSize
            }}
          />
        </div>
        <h1 className='my-2'>{title}</h1>
        <div className='flex justify-between'>
          <h2>{date.slice(0, 10)}</h2>
        </div>
      </div>
    </a>
  )
}

export default NewsCard;