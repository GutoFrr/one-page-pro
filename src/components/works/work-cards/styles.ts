import styled from 'styled-components'

interface ContainerProps {
  marginLeft: string | number
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 40px;
  width: 1130px;
  overflow: hidden;

  .work-card {
    min-width: 350px;
    max-width: 350px;
    transition: all 0.6s ease;

    &:first-child {
      margin-left: ${props => props.marginLeft};
    }

    .work-image {
      height: 230px;
      background: ${props => props.theme.colors.primary};
    }

    .work-description {
      height: 200px;
      background: ${props => props.theme.colors.works};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 28px 29px 19px;

      .title {
        font: 800 16px 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.worksTitle};
        text-transform: uppercase;
        letter-spacing: 0;
        margin-bottom: 7px;
        cursor: pointer;
        transition: all 0.3s ease-out;

        :hover {
          color: ${props => props.theme.colors.primary};
        }
      }

      .role {
        font: 400 13px 'Open Sans', sans-serif;
        font-style: italic;
        color: ${props => props.theme.colors.worksSubTitle};
        margin-bottom: 7px;
        cursor: pointer;
      }

      .text {
        font: 400 16px 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.worksText};
        letter-spacing: 0.5px;
        line-height: 1.6;
        padding-top: 8px;
        margin-bottom: 7px;
      }
    }
  }
`

export default Container
