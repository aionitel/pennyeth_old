import React from 'react'
import Carousel from 'react-grid-carousel'
import NewsCard from './NewsCard'

// type for news article that will be displayed
interface NewsArticleProps {
  title: string,
  authors: string[],
  image: string,
  date: string,
  url: string,
}

// test data
const NewsData: NewsArticleProps = {
  title: "Texas bitcoin miners back online after power surge caused curtailments",
  authors: ["Jamie Redman"],
  image: "https://s.yimg.com/uu/api/res/1.2/xXYF4FFhrTtMRAjWFWaRhw--~B/aD01MjY7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/a56bb3178474ee2d6766f403c5216f9a",
  date: "2022-07-19",
  url: "https://news.yahoo.com/texas-bitcoin-miners-back-online-203424037.html"
}

const NewsCarousel = () => {
  return (
    <div>
      <Carousel cols={3} rows={1} gap={10}>
        <Carousel.Item>
          <NewsCard title={NewsData.title} authors={NewsData.authors} image={NewsData.image} date={NewsData.date} url={NewsData.url} />
        </Carousel.Item>
        <Carousel.Item>
          <NewsCard title={NewsData.title} authors={NewsData.authors} image={NewsData.image} date={NewsData.date} url={NewsData.url} />
        </Carousel.Item>
        <Carousel.Item>
          <NewsCard title={NewsData.title} authors={NewsData.authors} image={NewsData.image} date={NewsData.date} url={NewsData.url} />
        </Carousel.Item>
        <Carousel.Item>
          <NewsCard title={NewsData.title} authors={NewsData.authors} image={NewsData.image} date={NewsData.date} url={NewsData.url} />
        </Carousel.Item>
        <Carousel.Item>
          <NewsCard title={NewsData.title} authors={NewsData.authors} image={NewsData.image} date={NewsData.date} url={NewsData.url} />
        </Carousel.Item>
        <Carousel.Item>
          <NewsCard title={NewsData.title} authors={NewsData.authors} image={NewsData.image} date={NewsData.date} url={NewsData.url} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default NewsCarousel