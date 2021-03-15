import { createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  

`

export default GlobalStyles
