import "./App.css";
import GlobalStyle from "./Styles/GlobalStyles";
import ThemeProvider from "./Components/Common/ThemeProvider";
import { QuizzProvider, useQuizz } from "./Context/QuizzContext";
import Header from "./Components/Common/Header";
import useLocalStorage from "use-local-storage";
import Welcome from "./Components/Home/Welcome";
import ThemeSelector from "./Components/Home/ThemeSelector";
import styled from "styled-components";
import Loader from "./Components/Common/Loader";
import Error from "./Components/Common/Error";
import QuestionDisplay from "./Components/Quiz/QuestionDisplay";
import ProgressBar from "./Components/Quiz/ProgressBar";
import AnswerList from "./Components/Quiz/AnswerList";
import SubmitButton from "./Components/Quiz/SubmitButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9.9rem 14rem;
  gap: 14.3rem;
`;

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const { status, theme, handleSetTheme } = useQuizz();
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

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
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Container>
            <Welcome />
            <ThemeSelector />
          </Container>
        )}
        {status === "active" && (
          <Container>
            <div className="questions">
              <QuestionDisplay />
              <ProgressBar />
            </div>
            <div className="awnsers">
              <AnswerList />
              <SubmitButton />
            </div>
          </Container>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
