import "./App.css";
import { createGlobalStyle } from "styled-components";
import { useReducer } from "react";
import Header from "./Components/Common/Header";
import { ThemeToggle } from "./Components/Common/ThemeToggle";
import useLocalStorage from "use-local-storage";
import RubikItalic from "./assets/fonts/Rubik-Italic-VariableFont_wght.ttf";
import Rubik from "./assets/fonts/Rubik-VariableFont_wght.ttf";

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
  body {
    font-family: "Rubik", sans-serif;
  }
`;

const initialState = {
  theme: "Accessibility",
};

function reducer(state, action) {
  switch (action.type) {
    case "setTheme":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [{ theme }, dispatch] = useReducer(reducer, initialState);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  function handleSetTheme() {
    dispatch({ type: "setTheme", action: "Accessibility" });
  }
  return (
    <>
      <GlobalStyle />
      <ThemeToggle isDark={isDark} setIsDark={setIsDark}>
        <Header
          theme={theme}
          handleSetTheme={handleSetTheme}
          toggleTheme={toggleTheme}
          isDark={isDark}
        />
      </ThemeToggle>
    </>
  );
}

export default App;
