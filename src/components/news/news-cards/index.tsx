import React from 'react'
import Container from './styles'
import newsData from './newsData'
import { Icon } from '@iconify/react'

interface NewsProps {
  title?: string
  release?: string
  writer?: string
  text?: string
}

const NewsCard: React.FC<NewsProps> = () => {
  return (
    <Container>
      {newsData.map((item, key) => (
        <div className="news-card" key={key}>
          <div className="news-title">
            <h3>{item.title}</h3>
          </div>
          <div className="news-text">
            <hr />
            <div className="news-info">
              <Icon icon="lucide:clock-9" className="clock icon" />
              <h6>{item.release}</h6>
              <Icon icon="fa:pencil" className="pencil icon" />
              <h6>{item.writer}</h6>
            </div>
            <p>{item.text}</p>
            <hr />
          </div>
        </div>
      ))}
    </Container>
  )
}

export default NewsCard
