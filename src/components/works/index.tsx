import React, { useState } from 'react'
import Container from './styles'
import { Icon } from '@iconify/react'
import WorkCard from './work-cards'

const Works = () => {
  const [scrollCarousel, setScrollCarousel] = useState<number>(2)
  const handleScroll = (direction: 'foward' | 'backward') => {
    if (direction === 'foward') {
      setScrollCarousel(scrollCarousel > -2 ? scrollCarousel - 1 : 2)
    } else if (direction === 'backward') {
      setScrollCarousel(scrollCarousel < 2 ? scrollCarousel + 1 : -2)
    }
  }

  return (
    <Container>
      <div className="works" id="Our Works">
        <div className="works-title">
          <div className="title">
            <h2>
              \ Works <span className="dot">.</span>
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
        <WorkCard position={scrollCarousel} />
      </div>
    </Container>
  )
}

export default Works
