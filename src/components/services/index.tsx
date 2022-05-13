import React from 'react'
import Service from './service'
import Container from './styles'

const Services = () => {
  return (
    <Container id="Services">
      <div className="services">
        <div className="services-title">
          <div className="our-services">
            <h2>
              \ Our Services <span className="dot">.</span>
            </h2>
          </div>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </p>
        </div>
        <Service />
      </div>
    </Container>
  )
}

export default Services
