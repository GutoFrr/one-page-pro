import styled from 'styled-components'
import background from '../../public/upload/service-bg.jpg'

const Container = styled.div`
  background-image: url(${background});
  background-position: center;
  padding-left: 330px;
  display: flex;
  align-items: center;
  justify-content: center;

  .services {
    height: 929px;
    width: 1130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .services-title {
    width: 1130px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-bottom: 90px;

    .our-services {
      width: 49%;
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
      width: 50%;
      letter-spacing: 0.8px;
      line-height: 1.7;
    }
  }
`

export default Container
