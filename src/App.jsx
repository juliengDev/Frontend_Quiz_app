import "./App.css";
import { useReducer } from "react";
import Header from "./Components/Common/Header";
import { ThemeProvider } from "./Components/Common/ThemeProvider";
import useLocalStorage from "use-local-storage";

import GlobalStyle from "./Styles/GlobalStyles";

const initialState = {
  questions: [],
  theme: "Accessibility",
  // "loading","error","ready","active","finished",
  status: "loading",
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
      <ThemeProvider isDark={isDark} setIsDark={setIsDark}>
        <Header
          theme={theme}
          handleSetTheme={handleSetTheme}
          toggleTheme={toggleTheme}
          isDark={isDark}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
