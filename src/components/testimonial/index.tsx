import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import Container from './styles'
import TestimonialItem from './testimonial-item'

const Testimonial = () => {
  const [scrollCarousel, setScrollCarousel] = useState<number>(0)
  const handleScroll = (direction: 'foward' | 'backward') => {
    if (direction === 'foward') {
      setScrollCarousel(scrollCarousel > -1 ? scrollCarousel - 1 : 0)
    } else if (direction === 'backward') {
      setScrollCarousel(scrollCarousel < 0 ? scrollCarousel + 1 : -1)
    }
  }

  return (
    <Container id="Testimonial">
      <div className="testimonial">
        <div className="testimonial-title">
          <h2>
            \ Testimonial <span>.</span>
          </h2>
        </div>
        <TestimonialItem position={scrollCarousel} />
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
    </Container>
  )
}

export default Testimonial
