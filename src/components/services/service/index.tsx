/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Container from './styles'
import serviceData from './serviceData'

interface ServiceProps {
  icon?: string
  title?: string
  text?: string
  active?: boolean
}

const Service: React.FC<ServiceProps> = () => {
  const [activeService, setActiveService] = useState(serviceData)
  const handleServiceClick = (index: number) => {
    const tempServices = activeService
    tempServices.forEach((tempService, index2) => {
      if (index !== index2) {
        tempService.active = false
      }
    })
    tempServices[index].active = !tempServices[index].active
    setActiveService([...tempServices])
  }

  return (
    <Container>
      {serviceData.map((item, index) => (
        <div
          className={`service ${
            activeService[index].active ? 'active' : 'inactive'
          }`}
          onClick={() => handleServiceClick(index)}
        >
          <img src={item.icon} alt="Ícone Services" />
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </Container>
  )
}

export default Service
