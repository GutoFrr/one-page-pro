import styled from 'styled-components'
import background from '../../public/upload/blog-bg.jpg'

const Container = styled.div`
  position: relative;
  z-index: 2;
  padding-left: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-position: center;
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

    .news-text {
      display: flex;
      flex-direction: row;
      width: 80%;
      justify-content: space-between;
    }

    .title {
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
      width: 63%;

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

    .news {
      width: 1006px;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .news-title {
      width: auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 135px;

      .news-text {
        display: flex;
        flex-direction: column;
      }

      .title {
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
        width: auto;

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
