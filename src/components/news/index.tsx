import React, { useState } from 'react'
import Container from './styles'
import { Icon } from '@iconify/react'
import NewsCard from './news-cards'

const News = () => {
  const [scrollCarousel, setScrollCarousel] = useState<number>(0)
  const handleScroll = (direction: 'foward' | 'backward') => {
    if (direction === 'foward') {
      setScrollCarousel(scrollCarousel > -5 ? scrollCarousel - 1 : 0)
    } else if (direction === 'backward') {
      setScrollCarousel(scrollCarousel < 0 ? scrollCarousel + 1 : -5)
    }
  }

  return (
    <Container id="Recent News">
      <div className="news">
        <div className="news-title">
          <div className="title">
            <h2>
              \ News <span className="dot">.</span>
            </h2>
          </div>
          <div className="text">
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which.
            </p>
          </div>
          <div className="buttons">
            <Icon
              icon="bi:arrow-left-circle"
              className="arrow"
              onClick={() => handleScroll('backward')}
            />
            <Icon
              icon="bi:arrow-right-circle"
              className="arrow"
              onClick={() => handleScroll('foward')}
            />
          </div>
        </div>
        <NewsCard position={scrollCarousel} />
      </div>
    </Container>
  )
}

export default News
