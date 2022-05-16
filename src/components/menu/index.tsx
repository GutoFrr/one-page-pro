import React from 'react'
import { menuItems, menuIcons } from './menuData'
import Container from './styles'
import { Icon } from '@iconify/react'
import logo from '../../public/logo-corporate.png'

interface MenuProps {
  menuItems?: []
  menuIcons?: []
}

const Menu: React.FC<MenuProps> = () => {
  return (
    <Container>
      <div className="menu">
        <a href="/">
          <img src={logo} alt="Logo Menu" />
        </a>
        <div className="menu-items">
          <ul className="menu-list">
            {menuItems.map((item, key) => (
              <li className="menu-item" key={key}>
                <a href={'#' + item}>{item}</a>
              </li>
            ))}
          </ul>
          <hr />
        </div>
        <div>
          <div className="social-icons">
            {menuIcons.map((item, key) => (
              <a key={key} className="social-item">
                <Icon icon={item} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Menu

// {/* <div>
//   {test.map((item, key) => (
//     <ul key={key}>
//       {item.menu ? <li>{item.menu}</li> : ''}
//       {item.icon ? <li>{item.icon}</li> : ''}
//     </ul>
//   ))}
// </div> */}
