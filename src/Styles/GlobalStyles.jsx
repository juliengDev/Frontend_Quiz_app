import { createGlobalStyle } from "styled-components";

import RubikItalic from "/fonts/Rubik-Italic-VariableFont_wght.ttf";
import Rubik from "/fonts/Rubik-VariableFont_wght.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Rubik", sans-serif;
    src: url(${Rubik}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
      font-family: "Rubik", sans-serif;
  src: url(${RubikItalic}) format('truetype');
  font-weight: 400;
  font-style: italic;
}
 html {
    font-size: 62.5%; /* 1rem = 10px */
  }
  body {
    font-family: "Rubik", sans-serif;

    
  }
`;

export default GlobalStyle;
