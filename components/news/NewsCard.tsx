import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion'

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
        <div className='flex-row hover:cursor-pointer hover:underline mr-4 overflow-hidden'>
          <motion.img src={image} alt='' className='hover:scale-105 transition-all duration-500 mb-2' />
          <h1>{title}</h1>
          <div>
            <h2>{authors}</h2>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default NewsCard;