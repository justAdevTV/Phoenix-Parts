import { createGlobalStyle } from "styled-components";

// Normailizes CSS for DOM
const GlobalStyle = createGlobalStyle`
  /* Starts clean so browser doesn't change anything */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 62.5%; // 1 rem = 10px; 10px/16px = 62.5%
    line-height: 1.7;
    color: ${props => props.theme.black};
    box-sizing: border-box;
  }

  // For storybook docs
  #docs-root {
    height: 100%;
    overflow-y: auto;
  }
`;

export default GlobalStyle;
