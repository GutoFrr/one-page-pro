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
        <img src={logo} alt="Logo Menu" />
        <div className="menu-list">
          <ul>
            {menuItems.map((item, key) => (
              <li className="menu-item" key={key}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="social-icons">
          <ul>
            {menuIcons.map((item, key) => (
              <li key={key}>
                <Icon icon={item} />
              </li>
            ))}
          </ul>
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
