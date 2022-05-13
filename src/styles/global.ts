import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    ::selection {
      color: ${props => props.theme.colors.text};
      background: ${props => props.theme.colors.primary};
}
  }

  body {
    font: 400 16px 'Open Sans', sans-serif;
  }
`
