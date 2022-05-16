import styled from 'styled-components'
import background from '../../public/upload/contact-bg.jpg'

const Container = styled.div`
  background: url(${background});
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  .contact {
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 929px;
    padding: 160px 0 160px 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact-forms {
    display: flex;
    flex-direction: column;
    width: 683px;
    padding-right: 100px;
    margin-top: -125px;

    .title {
      padding-bottom: 25px;

      h2 {
        font: 800 60px 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.text};
        text-transform: uppercase;

        .dot {
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        background: transparent;
        border: none;
        border-bottom: 2px solid ${props => props.theme.colors.text};
        padding: 15px 0;
        margin-bottom: 22px;

        ::placeholder {
          font: 500 16px 'Open Sans', sans-serif;
          color: ${props => props.theme.colors.text};
        }

        :focus {
          font: 500 16px 'Open Sans', sans-serif;
          color: ${props => props.theme.colors.text};
          outline: none;
        }

        :active {
          outline: none;
          font: 500 16px 'Open Sans', sans-serif;
          color: ${props => props.theme.colors.text};
        }
      }

      textarea {
        height: 140px;
        background: transparent;
        border: none;
        border-bottom: 2px solid ${props => props.theme.colors.text};
        padding: 15px 0;
        margin-bottom: 36px;

        ::placeholder {
          font: 500 16px 'Open Sans', sans-serif;
          color: ${props => props.theme.colors.text};
        }

        :focus {
          font: 500 16px 'Open Sans', sans-serif;
          color: ${props => props.theme.colors.text};
          outline: none;
        }

        :active {
          outline: none;
          font: 500 16px 'Open Sans', sans-serif;
          color: ${props => props.theme.colors.text};
        }
      }

      button {
        font: bold 13px 'Open Sans', sans-serif;
        text-transform: uppercase;
        background: ${props => props.theme.colors.primary};
        width: 200px;
        height: 62px;
        border: none;
        color: ${props => props.theme.colors.text};
        cursor: pointer;
      }
    }
  }

  .contact-info {
    display: flex;
    flex-direction: column;
  }

  .contact-city {
    padding-bottom: 50px;
    h3 {
      font: 800 29px 'Open Sans', sans-serif;
      color: ${props => props.theme.colors.text};
      padding-bottom: 30px;
    }

    .info {
      display: flex;
      margin-bottom: 30px;
      align-items: center;
      color: ${props => props.theme.colors.text};

      .icon {
        margin-right: 15px;
        line-height: 1;
        font-size: 24px;
      }

      h4 {
        font: 400 17px 'Open Sans', sans-serif;
        line-height: 1.7;
      }

      .email {
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1140px) {
    .contact {
      padding: 0 55px;
    }
  }
`

export default Container
