import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useRecoilValue } from 'recoil'
import images from '../../data/images/images'
import { newsAtom } from '../../state/atoms'
import NewsCard from './NewsCard'

// type for news article that will be displayed
interface NewsArticleProps {
  title: string,
  date: string,
  url: string,
}

const NewsCarousel = () => {
  const articles = useRecoilValue(newsAtom);
  console.log(articles)

  return (
    <div>
      <Carousel cols={3} rows={1} gap={0} containerStyle={{ width: 1500 }}>
        {
          articles.map(item => (
            <Carousel.Item key=''>
              <NewsCard title={item.title} image={item.image} date={item.date} url={item.url} />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}

export default NewsCarousel