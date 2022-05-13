import React from 'react'
import testimonialData from './testimonialData'
import Container from './styles'

interface TestimonialProps {
  text?: string
  picture?: string
  author?: string
  role?: string
  position: number
}

const TestimonialItem: React.FC<TestimonialProps> = ({ position }) => {
  return (
    <Container marginLeft={(position * 900).toString() + 'px'}>
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
    </Container>
  )
}

export default TestimonialItem
