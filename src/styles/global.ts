import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
    flex: 1;
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
    background: ${(props) => props.theme.colors.background};

  background: -webkit-radial-gradient(
    circle,
    hsla(76, 6%, 2%, 1) 91%
  );

  }
  

`

export default GlobalStyles
