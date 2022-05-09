import styled from 'styled-components'

const Container = styled.div`
  width: 330px;
  height: 100vh;
  background: ${props => props.theme.colors.menu};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 62vh;
  }
`

export default Container
