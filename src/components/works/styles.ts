import styled from 'styled-components'
import background from '../../public/upload/works-bg.jpg'

const Container = styled.div`
  background-image: url(${background});
  background-position: center;
  padding-left: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 929px;
  position: relative;
  z-index: 3;

  .works {
    width: 1130px;
    height: 610px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .works-title {
    width: 1130px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 80px;

    .work-text {
      display: flex;
      flex-direction: row;
    }

    .title {
      width: 370px;

      h2 {
        color: ${props => props.theme.colors.text};
        font: 800 60px 'Open Sans', sans-serif;
        text-transform: uppercase;
      }

      .dot {
        color: ${props => props.theme.colors.primary};
      }
    }

    .text {
      width: 51%;

      p {
        color: ${props => props.theme.colors.text};
        font: 400 17px 'Open Sans', sans-serif;
        letter-spacing: 0.8px;
        line-height: 1.7;
      }
    }

    .buttons {
      display: flex;
      column-gap: 4px;
      .arrow {
        font-size: 47px;
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1140px) {
    padding: 0 55px;

    .works {
      width: 1006px;
    }

    .works-title {
      width: 1006px;

      .work-text {
        display: flex;
        flex-direction: column;
      }
      .title {
        width: auto;

        h2 {
          color: ${props => props.theme.colors.text};
          font: 800 60px 'Open Sans', sans-serif;
          text-transform: uppercase;
        }

        .dot {
          color: ${props => props.theme.colors.primary};
        }
      }

      .text {
        width: 90%;

        p {
          color: ${props => props.theme.colors.text};
          font: 400 17px 'Open Sans', sans-serif;
          letter-spacing: 0.8px;
          line-height: 1.7;
        }
      }

      .buttons {
        display: flex;
        column-gap: 4px;
        .arrow {
          font-size: 47px;
          color: ${props => props.theme.colors.primary};
          cursor: pointer;
        }
      }
    }
  }
`

export default Container
