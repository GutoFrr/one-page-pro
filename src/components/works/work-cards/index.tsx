import React from 'react'
import Container from './styles'
import workData from './workData'
import { Icon } from '@iconify/react'

interface WorkProps {
  image?: string
  title?: string
  role?: string
  text?: string
  position: number
}

const WorkCard: React.FC<WorkProps> = ({ position }) => {
  return (
    <Container marginLeft={(position * 390).toString() + 'px'}>
      {workData.map((item, key) => (
        <div className="work-card" key={key}>
          <div className="work-image">
            <div className="shadow"></div>
            <Icon icon="ant-design:search-outlined" className="search" />
            <img src={item.image} />
          </div>
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
