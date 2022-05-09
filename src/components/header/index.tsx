import React, { useState } from 'react'
import Container from './styles'
import headerData from './headerData'
import { Icon } from '@iconify/react'

interface HeaderProps {
  open?: string
  address?: string
  phoneNumber?: string
  email?: string
  icon?: string
}

const Header: React.FC<HeaderProps> = () => {
  const [showHeader, setShowHeader] = useState(false)
  const handleShowHeader = () => setShowHeader(!showHeader)

  return (
    <Container>
      <div className={`header ${showHeader ? 'active' : 'inactive'}`}>
        <div className="open-time">
          <h4>{headerData.open}</h4>
        </div>
        <div className="header-description">
          <div className="address">
            <Icon icon={headerData.icon[0]} className="header-icon" />
            <h4>{headerData.address}</h4>
          </div>
          <div className="phone">
            <Icon icon={headerData.icon[1]} className="header-icon" />
            <h4>{headerData.phoneNumber}</h4>
          </div>
          <div className="email">
            <Icon icon={headerData.icon[2]} className="header-icon" />
            <h4>{headerData.email}</h4>
          </div>
        </div>
      </div>
      <div
        className={`header-button ${showHeader ? 'active' : 'inactive'}`}
        onClick={handleShowHeader}
      >
        <div className="triangle"></div>
        <Icon icon="akar-icons:plus" className="plus-icon" />
        <Icon icon="akar-icons:minus" className="minus-icon" />
      </div>
    </Container>
  )
}

export default Header
