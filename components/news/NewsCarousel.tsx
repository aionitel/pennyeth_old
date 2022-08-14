import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useRecoilValue } from 'recoil'
import images from '../../data/images/images'
import { newsAtom } from '../../state/atoms'
import NewsCard from './NewsCard'

// type for news article that will be displayed
interface NewsArticleProps {
  title: string,
  image: string
  date: string,
  url: string,
}

interface NewsCarouselProps {
  newsData: NewsArticleProps[]
}

const NewsCarousel: React.FC<NewsCarouselProps> = ({ newsData }) => {
  return (
      <Carousel cols={4} rows={1} gap={0} containerStyle={{ width: 1500 }}>
        {
          newsData.map(item => (
            <Carousel.Item key=''>
              <NewsCard title={item.title} image={item.image} date={item.date} url={item.url} />
            </Carousel.Item>
          ))
        }
      </Carousel>
  )
}

export default NewsCarousel