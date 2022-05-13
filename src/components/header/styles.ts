import styled from 'styled-components'

const Container = styled.div`
  height: auto;
  position: relative;
  z-index: 5;

  .header {
    width: 100%;
    height: 91.2px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 2;
    padding: 32px 30px;
    background: ${props => props.theme.colors.header};
    font-size: 16px;
    color: ${props => props.theme.colors.headerText};
    top: -91.2px;
    transition: all 0.3s;

    h4 {
      font-weight: 400;
    }
  }

  .header.active {
    top: 0;
  }

  .open-time {
    margin-right: auto;
    padding: 0 20px;
  }

  .header-description {
    display: flex;
    padding: 0 20px;
    column-gap: 24px;

    div {
      display: flex;

      .header-icon {
        margin-right: 16px;
        font-size: 21px;
        color: ${props => props.theme.colors.text};
      }
    }

    .email {
      h4 {
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
        transition: all 0.2s ease;

        :hover {
          color: #b1d234d0;
        }
      }
    }
  }

  .minus-icon {
    display: none;
  }

  .header-button {
    width: 80px;
    height: 80px;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    .plus-icon {
      position: absolute;
      top: 19px;
      right: 13px;
      color: ${props => props.theme.colors.text};
    }

    .triangle {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 80px 80px 0;
      border-color: transparent ${props => props.theme.colors.primary};
    }
  }

  .header-button.active {
    top: 91.2px;
    transition: all 0.3s ease;

    .minus-icon {
      display: block;
      position: absolute;
      top: 19px;
      right: 13px;
      color: ${props => props.theme.colors.text};
    }

    .plus-icon {
      display: none;
    }
  }
`

export default Container
