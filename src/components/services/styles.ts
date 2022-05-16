import styled from 'styled-components'
import background from '../../public/upload/service-bg.jpg'

const Container = styled.div`
  position: relative;
  z-index: 2;
  background-image: url(${background});
  background-position: center;
  padding-left: 330px;
  display: flex;
  align-items: center;
  justify-content: center;

  .services {
    height: 929px;
    display: flex;
    width: 1130px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .services-title {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 90px;

    .our-services {
      max-width: 550px;
      column-gap: 10px;

      h2 {
        font: 800 60px 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.text};
        text-transform: uppercase;
      }

      .dot {
        color: ${props => props.theme.colors.primary};
        margin-right: 30px;
      }
    }

    p {
      font: 400 17px 'Open Sans', sans-serif;
      color: ${props => props.theme.colors.text};
      max-width: 570px;
      letter-spacing: 0.8px;
      line-height: 1.7;
    }
  }

  @media screen and (max-width: 1140px) {
    padding: 0 55px;

    .services-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 90px;

      .our-services {
        max-width: 10000px;

        h2 {
          font: 800 60px 'Open Sans', sans-serif;
          color: ${props => props.theme.colors.text};
          text-transform: uppercase;
        }

        .dot {
          color: ${props => props.theme.colors.primary};
          margin-right: 30px;
        }
      }

      p {
        font: 400 16px 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.text};
        max-width: none;
        letter-spacing: 0.8px;
        line-height: 1.7;
      }
    }
  }
`

export default Container
