import React from 'react'
import Container from './styles'
import { Icon } from '@iconify/react'
import WorkCard from './work-cards'

const Works = () => {
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
            <Icon icon="bi:arrow-left-circle" className="arrow" />
            <Icon icon="bi:arrow-right-circle" className="arrow" />
          </div>
        </div>
        <WorkCard />
      </div>
    </Container>
  )
}

export default Works
