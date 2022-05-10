import React from 'react'
import Container from './styles'
import workData from './workData'

interface WorkProps {
  image?: string
  title?: string
  role?: string
  text?: string
}

const WorkCard: React.FC<WorkProps> = () => {
  return (
    <Container>
      {workData.map((item, key) => (
        <div className="work-card" key={key}>
          <div className="work-image"></div>
          <div className="work-description">
            <div className="work-title">
              <h4 className="title">{item.title}</h4>
              <h6 className="role">{item.role}</h6>
            </div>
            <div className="text">
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default WorkCard
