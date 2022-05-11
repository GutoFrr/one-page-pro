import styled from 'styled-components'

const Container = styled.div`
  background: rgba(10, 10, 10, 0.7);
  display: flex;
  justify-content: center;
  height: 929px;
  padding: 160px 0px 160px 330px;

  .contact {
    width: 1130px;
    display: flex;
  }

  .contact-forms {
    display: flex;
    flex-direction: column;
    width: 683px;
    padding-right: 80px;

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
    }
  }
`

export default Container
