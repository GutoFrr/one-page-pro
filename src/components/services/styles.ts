import styled from 'styled-components'

const Container = styled.div`
  background: #a3a3a3;
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
      line-height: 1.7;
    }
  }
`

export default Container
