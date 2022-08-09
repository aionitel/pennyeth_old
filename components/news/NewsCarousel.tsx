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

// test data
const NewsData: NewsArticleProps = {
  title: "Texas bitcoin miners back online after power surge caused curtailments",
  date: "2022-07-19",
  url: "https://news.yahoo.com/texas-bitcoin-miners-back-online-203424037.html"
}

const NewsCarousel = () => {
  const articles = useRecoilValue(newsAtom);
  const [cover, setCover] = useState<string>("");

  if (typeof window !== 'undefined') {
      window.onload = function() {
      setCover(images[Math.floor(Math.random() * images.length)]);

      console.log("setting images");
    }
  }

  return (
    <div>
      <Carousel cols={3} rows={1} gap={0} containerStyle={{ width: 1500 }}>
        {
          articles.map(item => (
            <Carousel.Item key=''>
              <NewsCard title={item.title} image={cover} date={item.date} url={item.url} />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </div>
  )
}

export default NewsCarousel