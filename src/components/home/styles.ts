import styled from 'styled-components'
import background from '../../public/upload/home-bg-1.jpg'

const Container = styled.div`
  position: relative;
  z-index: 3;

  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${background});
    background-position: center;
    background-size: 100vw;
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
      transition: all 0.3s;
    }

    hr {
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }

  @media screen and (max-width: 1140px) {
    .home {
      padding: 0 0 0 11vw;
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
  }
`

export default Container
