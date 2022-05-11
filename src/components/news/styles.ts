import styled from 'styled-components'

const Container = styled.div`
  padding-left: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a3a3a3;
  height: 929px;

  .news {
    width: 1130px;
    height: 519px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .news-title {
    width: 1130px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 135px;

    .title {
      width: 25%;
      h2 {
        font: 800 60px 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.text};
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      .dot {
        color: ${props => props.theme.colors.primary};
      }
    }

    .text {
      width: 52%;

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
`

export default Container
