import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
    font-family: Roboto, sans-serif;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
    
    position: relative;
    overflow: hidden;
  }
`;

export default GlobalStyle;
