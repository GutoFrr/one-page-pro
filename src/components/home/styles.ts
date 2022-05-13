import styled from 'styled-components'

const Container = styled.div`
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: #a3a3a3;
    height: 929px;
    padding-left: 470px;
    row-gap: 40px;
  }

  .home-title {
    color: ${props => props.theme.colors.text};

    h1 {
      font: 800 114px 'Open Sans', sans-serif;
      text-transform: uppercase;
      line-height: 1;
    }

    h3 {
      font: 400 43px 'Open Sans', sans-serif;
      color: ${props => props.theme.colors.primary};
      margin-bottom: 20px;
    }

    .pro {
      color: ${props => props.theme.colors.primary};
    }
  }

  .home-explore {
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 9px;
      cursor: pointer;

      :hover {
        .explore-icon {
          margin-left: 25px;
          animation-iteration-count: infinite;
          animation-duration: 1.7s;
          animation-delay: 0.1s;
          animation-name: arrow;
          animation-timing-function: ease-in-out;
          position: relative;
        }
      }
    }

    @keyframes arrow {
      0% {
        left: -3px;
      }
      50% {
        left: 15px;
      }
      100% {
        left: -3px;
      }
    }

    h5 {
      color: ${props => props.theme.colors.text};
      text-transform: uppercase;
      font-size: 14px;

      letter-spacing: 0.8px;
      vertical-align: middle;
    }

    .explore-icon {
      color: ${props => props.theme.colors.text};
      font-size: 17px;
      vertical-align: middle;
      margin-left: 10px;
      transition: all 0.3s ease;
    }

    hr {
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }

  .minus-icon {
    display: none;
  }

  .header-button {
    width: 80px;
    height: 80px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    z-index: 3;
    display: flex;
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
`

export default Container
