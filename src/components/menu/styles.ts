import styled from 'styled-components'

const Container = styled.div`
  width: 330px;
  height: 100vh;
  background: ${props => props.theme.colors.menu};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 70vh;

    img {
      width: 165px;
      height: 97.5px;
      cursor: pointer;
    }
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 30px;
  }

  .menu-list {
    list-style: none;
    text-align: center;
    text-transform: uppercase;

    .menu-item {
      padding: 12px 0;
    }

    a {
      font: 700 14px 'Open Sans', sans-serif;
      text-decoration: none;
      color: ${props => props.theme.colors.menuItem};
      letter-spacing: 0.5px;
      transition: all 0.4s ease;

      :hover {
        color: ${props => props.theme.colors.text};
      }

      :focus {
        color: ${props => props.theme.colors.text};
      }
    }
  }

  hr {
    transform: rotate(90deg);
    color: ${props => props.theme.colors.text};
    width: 15px;
  }

  .social-icons {
    display: flex;
    flex-direction: row;
    list-style: none;
    column-gap: 25px;

    .social-item {
      :hover:nth-child(1) {
        .social-icon {
          color: ${props => props.theme.colors.facebook};
        }
      }

      :hover:nth-child(2) {
        .social-icon {
          color: ${props => props.theme.colors.googlePlus};
        }
      }

      :hover:nth-child(3) {
        .social-icon {
          color: ${props => props.theme.colors.linkedIn};
        }
      }

      :hover:nth-child(4) {
        .social-icon {
          color: ${props => props.theme.colors.twitter};
        }
      }
    }

    .social-icon {
      transition: all 0.3s ease;
      font-size: 17px;
      color: ${props => props.theme.colors.text};
      cursor: pointer;
    }
  }
`

export default Container
