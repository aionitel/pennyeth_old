import React from 'react'
import { useRecoilValue } from 'recoil'
import { newsAtom } from '../../../state/atoms'
import NewsCard from '../NewsCard'
import Carousel from 'nuka-carousel/lib/carousel'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'

const MobileNewsCarousel: React.FC = () => {
  const newsData = useRecoilValue(newsAtom);

  return (
    <div className='flex lg:hidden'>
      <Carousel 
        cellSpacing={0} 
        slidesToShow={1} 
        style={{ width: 350 }}
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide}>
            <AiOutlineLeftCircle className='text-4xl' />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide}>
            <AiOutlineRightCircle className='text-4xl' />
          </button>
        )}
      >
        {
          newsData.map(item => (
            <NewsCard key='' title={item.title} image={item.image} date={item.date} url={item.url} />
          ))
        }
      </Carousel>
    </div>
  )
}

export default MobileNewsCarousel