import "./Styles/App.css";
import "./Styles/reset.css";
import { useQuizz } from "./Context/QuizzContext";
import GlobalStyle from "./Styles/GlobalStyles";
import useLocalStorage from "use-local-storage";

import {
  ThemeProvider,
  Header,
  Loader,
  Error,
  Welcome,
  ThemeSelector,
  QuestionDisplay,
  ProgressBar,
  AnswerList,
  MainContainer,
  AnswerContainer,
  QuestionsContainer,
  ScoreDisplay,
} from "./Components/index.js";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const { status } = useQuizz();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider isDark={isDark}>
        <Header setIsDark={setIsDark} isDark={isDark} />
        <MainContainer>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <>
              <Welcome />
              <ThemeSelector isDark={isDark} />
            </>
          )}
          {(status === "selected" ||
            status === "active" ||
            status === "submit" ||
            status === "answered") && (
            <>
              <QuestionsContainer>
                <QuestionDisplay />
                <ProgressBar isDark={isDark} />
              </QuestionsContainer>
              <AnswerContainer>
                <AnswerList isDark={isDark} />
              </AnswerContainer>
            </>
          )}
          {status === "finished" && (
            <>
              <Welcome />
              <ScoreDisplay isDark={isDark} />
            </>
          )}
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
