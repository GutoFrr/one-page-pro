import styled from 'styled-components'

const Container = styled.div`
  height: auto;
  position: relative;
  z-index: 5;

  .header {
    width: 100%;
    height: 91.2px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 2;
    padding: 32px 30px;
    background: ${props => props.theme.colors.header};
    font-size: 16px;
    color: ${props => props.theme.colors.headerText};
    top: -91.2px;
    transition: all 0.3s;

    h4 {
      font-weight: 400;
    }
  }

  .header.active {
    top: 0;
  }

  .open-time {
    margin-right: auto;
    padding: 0 20px;
  }

  .header-description {
    display: flex;
    padding: 0 20px;
    column-gap: 24px;

    div {
      display: flex;

      .header-icon {
        margin-right: 16px;
        font-size: 21px;
        color: ${props => props.theme.colors.text};
      }
    }

    .email {
      h4 {
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
        transition: all 0.2s ease;

        :hover {
          color: #b1d234d0;
        }
      }
    }
  }

  .minus-icon {
    display: none;
  }

  .header-button {
    display: flex;
    width: 80px;
    height: 80px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    z-index: 3;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    .plus-icon {
      position: absolute;
      top: 19px;
      right: 13px;
      color: ${props => props.theme.colors.text};
    }

    .triangle {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 80px 80px 0;
      border-color: transparent ${props => props.theme.colors.primary};
    }
  }

  .header-button.active {
    top: 91.2px;
    transition: all 0.3s ease;

    .minus-icon {
      display: block;
      position: absolute;
      top: 19px;
      right: 13px;
      color: ${props => props.theme.colors.text};
    }

    .plus-icon {
      display: none;
    }
  }

  .navbar {
    display: none;
  }

  @media screen and (max-width: 1140px) {
    .header {
      height: 118px;
      padding: 32px 30px;
      top: -118px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      transition: all 0.3s ease;

      .open-time {
        margin-right: 0;
        padding: 0;
      }
    }

    .header.active {
      top: 0px;
    }

    .header-button {
      display: none;
    }

    .navbar {
      background: ${props => props.theme.colors.navbar};
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 75px;
      position: relative;
      top: 0;
      left: 0;
      z-index: 30;
      box-shadow: 0px 1px 50px 1px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;

      .icon {
        color: ${props => props.theme.colors.text};
      }

      .logo-container {
        padding-left: 50px;
        margin-right: auto;
      }

      .menu-container {
        width: 80px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;

        .menu-icon {
          font-size: 35px;
          cursor: pointer;
        }
      }

      .menu-button {
        width: 80px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.colors.primary};
        cursor: pointer;
      }
    }

    .navbar.active {
      top: 118px;

      .minus-icon {
        display: flex;
        color: ${props => props.theme.colors.text};
      }

      .plus-icon {
        display: none;
      }
    }
  }
`

export default Container
