import styled from 'styled-components'

interface ContainerProps {
  marginLeft: string | number
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 900px;
  overflow: hidden;

  .testimonial-text {
    min-width: 900px;
    transition: all 0.5s ease-in;

    &:first-child {
      margin-left: ${props => props.marginLeft};
    }
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
`

export default Container
