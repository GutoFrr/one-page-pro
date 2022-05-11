import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 40px;

  .news-card {
    width: 33%;
    max-width: 360px;
  }

  .news-title {
    width: 350px;
    margin-bottom: 20px;

    h3 {
      font: 800 24px 'Open Sans', sans-serif;
      text-transform: uppercase;
      color: ${props => props.theme.colors.text};
      cursor: pointer;
      line-height: 1.2;
      transition: all 0.3s ease-in-out;

      :hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  .news-text {
    .news-info {
      display: flex;
      padding-top: 12px;
      margin-bottom: 22px;

      .icon {
        margin-right: 13px;
        vertical-align: middle;
        line-height: 1;
        color: ${props => props.theme.colors.primary};
      }

      h6 {
        font: bold 11px 'Open Sans', sans-serif;
        color: ${props => props.theme.colors.primary};
        text-transform: uppercase;
        margin-right: 25px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        :hover {
          color: ${props => props.theme.colors.text};
        }
      }
    }

    p {
      font: 400 16px 'Open Sans', sans-serif;
      color: ${props => props.theme.colors.newsText};
      line-height: 1.7;
      margin-bottom: 30px;
    }

    hr {
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }
`

export default Container