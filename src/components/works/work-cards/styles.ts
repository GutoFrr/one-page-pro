import styled from 'styled-components'

interface ContainerProps {
  marginLeft: string | number
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 40px;
  width: 1130px;
  overflow: hidden;

  .search {
    display: none;
    transition: all 0.5s;
    z-index: 2;
  }

  .work-card {
    min-width: 350px;
    max-width: 350px;
    transition: all 0.5s ease-out;

    &:first-child {
      margin-left: ${props => props.marginLeft};
    }

    .work-image {
      height: 230px;
      width: 350px;
      display: flex;
      justify-content: center;
      overflow: hidden;
      align-items: center;
      position: relative;

      .shadow {
        overflow: hidden;
        position: absolute;
        height: 230px;
        width: 350px;
        opacity: 0;
        transition: all 0.5s;
      }

      img {
        height: 230px;
        width: 350px;
        transition: all 0.5s;
      }

      :hover {
        img {
          height: 250px;
          width: 370px;
        }
        .search {
          display: block;
          position: absolute;
          font-size: 30px;
          color: ${props => props.theme.colors.primary};
          cursor: pointer;
        }

        .shadow {
          overflow: visible;
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.6);
        }
      }
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
