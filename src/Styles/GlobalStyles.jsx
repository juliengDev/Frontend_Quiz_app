import styled, { createGlobalStyle } from "styled-components";

import RubikItalic from "/src/assets/fonts/Rubik-Italic-VariableFont_wght.ttf";
import Rubik from "/src/assets/fonts/Rubik-VariableFont_wght.ttf";

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

/** 

	100 : Thin
	•	200 : Extra Light (Ultra Light)
	•	300 : Light
	•	400 : Normal
	•	500 : Medium
	•	600 : Semi Bold (Demi Bold)
	•	700 : Bold
	•	800 : Extra Bold (Ultra Bold)
	•	900 : Black (Heavy)
  
  */
