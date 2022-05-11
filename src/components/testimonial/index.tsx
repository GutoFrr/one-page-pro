import { Icon } from '@iconify/react'
import React from 'react'
import Container from './styles'
import testimonialData from './testimonialData'

interface TestimonialProps {
  text?: string
  picture?: string
  author?: string
  role?: string
}

const Testimonial: React.FC<TestimonialProps> = () => {
  return (
    <Container>
      <div className="testimonial" id="Testimonial">
        <div className="testimonial-title">
          <h2>
            \ Testimonial <span>.</span>
          </h2>
        </div>
        {testimonialData.map((item, key) => (
          <div className="testimonial-text" key={key}>
            <p>{item.text}</p>
            <div className="testimonial-user">
              {/* <img src={item.picture} alt="Perfil do autor do depoimento" /> */}
              <div className="picture"></div>
              <div className="author">
                <h5>{item.author}</h5>
                <h6>{item.role}</h6>
              </div>
            </div>
          </div>
        ))}
        <div className="buttons">
          <Icon icon="bi:arrow-left-circle" className="arrow" />
          <Icon icon="bi:arrow-right-circle" className="arrow" />
        </div>
      </div>
    </Container>
  )
}

export default Testimonial
