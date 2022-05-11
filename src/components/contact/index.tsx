import React from 'react'
import Container from './styles'
import contactData from './contactData'
import { Icon } from '@iconify/react'

interface ContactProps {
  city?: string
  icon?: string[]
  address?: string
  email?: string
  phone?: string
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <Container>
      <div className="contact" id="Contact">
        <div className="contact-forms">
          <div className="title">
            <h2>
              Contact <span className="dot">.</span>
            </h2>
          </div>
          <div className="forms">
            <form>
              <input type="text" placeholder="Full Name*" />
              <input type="email" placeholder="Email*" />
              <textarea placeholder="Message*" />
              <button>Submit Now</button>
            </form>
          </div>
        </div>
        <div className="contact-info">
          {contactData.map((item, key) => (
            <div className="contact-city" key={key}>
              <h3>{item.city}</h3>
              <div>
                <Icon icon={item.icon[0]} />
                <h4>{item.address}</h4>
              </div>
              <div>
                <Icon icon={item.icon[1]} />
                <h4>{item.email}</h4>
              </div>
              <div>
                <Icon icon={item.icon[2]} />
                <h4>{item.phone}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Contact
