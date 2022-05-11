import styled from 'styled-components'

const Container = styled.div`
  padding-left: 330px;
  height: 929px;
  background: #a3a3a3;
  display: flex;
  flex-direction: column;
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

  .testimonial-text {
    p {
      font: 400 21px 'Open Sans', sans-serif;
      font-style: italic;
      color: ${props => props.theme.colors.testimonialText};
      margin-bottom: 27px;
      line-height: 1.7;
      width: 900px;
      text-align: center;
    }

    .testimonial-user {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;
      margin-bottom: 55px;

      .picture {
        background: pink;
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }

      .author {
        h5 {
          font: 700 15px 'Open Sans', sans-serif;
          color: ${props => props.theme.colors.testimonialAuthor};
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }

        h6 {
          font: 400 13px 'Open Sans', sans-serif;
          font-style: italic;
          color: ${props => props.theme.colors.testimonialAuthorRole};
        }
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
