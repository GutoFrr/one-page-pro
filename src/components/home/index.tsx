import React from 'react'
import Container from './styles'
import { Icon } from '@iconify/react'

const HomePage = () => {
  return (
    <Container id="Home">
      <div className="home">
        <div className="home-title">
          <h1>
            One Page <span className="pro">Pro</span>
          </h1>
          <h3>Provide all-in-one service.</h3>
        </div>
        <div className="home-explore">
          <a>
            <h5>Explore More</h5>
            <Icon icon="bi:arrow-right" className="explore-icon" />
          </a>
          <hr />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
