import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px;

  .service {
    width: 33%;
    max-width: 350px;
    height: 350px;
    border-radius: 4px;
    border-bottom: 2px solid transparent;
    background: ${props => props.theme.colors.services};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;

    h4 {
      text-transform: uppercase;
      font: 700 18px 'Open Sans', sans-serif;
      color: ${props => props.theme.colors.servicesTitle};
      line-height: 1.55;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    p {
      font: 400 15px 'Open Sans', sans-serif;
      color: ${props => props.theme.colors.servicesText};
      line-height: 1.7;
    }

    :hover {
      background: ${props => props.theme.colors.selectedServices};

      h4 {
        color: ${props => props.theme.colors.selectedServicesTitle};
      }

      p {
        color: ${props => props.theme.colors.selectedServicesText};
      }
    }
  }

  .service.active {
    background: ${props => props.theme.colors.selectedServices};
    border-bottom: 2px solid ${props => props.theme.colors.primary};

    h4 {
      color: ${props => props.theme.colors.selectedServicesTitle};
    }

    p {
      color: ${props => props.theme.colors.selectedServicesText};
    }
  }
`

export default Container
