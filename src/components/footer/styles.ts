import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  z-index: 2;
  .footer {
    width: 100%;
    height: 103px;
    background: ${props => props.theme.colors.header};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 200px;

    h4 {
      font: 400 16px 'Open Sans', sans-serif;
      color: ${props => props.theme.colors.headerText};
      padding-left: 20px;
      padding-right: 20px;
      line-height: 1.7;
    }
  }

  @media screen and (max-width: 1140px) {
    .footer {
      padding: 0 55px;
    }
  }
`

export default Container
