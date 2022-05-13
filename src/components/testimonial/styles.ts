import styled from 'styled-components'

const Container = styled.div`
  padding-left: 330px;
  background: #a3a3a3;
  height: 929px;
  display: flex;
  justify-content: center;
  align-items: center;

  .testimonial {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .testimonial-title {
    margin-bottom: 60px;

    h2 {
      font: 800 60px 'Open Sans', sans-serif;
      color: ${props => props.theme.colors.text};
      text-transform: uppercase;
      letter-spacing: 2px;

      span {
        color: ${props => props.theme.colors.primary};
      }
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
`

export default Container
