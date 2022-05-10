import styled from 'styled-components'
import '@iconify/react'

const Container = styled.div`
  padding-left: 330px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #a3a3a3;

  .about {
    padding: 40px 60px;
    background: ${props => props.theme.colors.about};
    height: 929px;
    width: 700px;
    display: flex;
    flex-direction: column;

    .about-title {
      padding: 85px 0 30px;
      h2 {
        font: 800 52px 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: 1px;
        line-height: 1.2;
      }
    }

    p {
      font: 400 16px 'Open Sans', sans-serif;
      color: ${props => props.theme.colors.aboutText};
      margin-bottom: 20px;
      line-height: 1.7;
    }

    .text-1 {
      span {
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
      }
    }

    .about-list {
      padding: 0 20px 25px;
      li {
        margin-bottom: 10px;
        padding-left: 15px;
        color: ${props => props.theme.colors.aboutList};
        font: bold 16px 'Open Sans', sans-serif;
        line-height: 1.7;

        span {
          vertical-align: 3px;
        }
      }

      li::marker {
        content: url('https://api.iconify.design/gg/radio-checked.svg?color=%23b1d234');
      }
    }

    a {
      cursor: pointer;
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
      line-height: 1.7;
      margin-bottom: 20px;
    }
  }
`

export default Container
