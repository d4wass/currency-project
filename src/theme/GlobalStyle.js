import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }

  ::-webkit-scrollbar{
    width: 10px;
    background-color: hsl(227,11%,16%);
  }

   ::-webkit-scrollbar-thumb{
    background: hsla(0, 0%, 0%, .4);
    border-radius: 40px;
  }
`;

export default GlobalStyle;
