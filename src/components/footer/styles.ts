import styled from 'styled-components'

const Container = styled.div`
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
`

export default Container
