import "./App.css";
import { useQuizz } from "./Context/QuizzContext";
import GlobalStyle from "./Styles/GlobalStyles";
import { Container } from "./Styles/GlobalStyles";
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
  ScoreDisplay,
  PlayAgainButton,
} from "./Components/index.js";
import Button from "./Components/Common/Button.jsx";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const { status } = useQuizz();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider isDark={isDark}>
        <Header setIsDark={setIsDark} isDark={isDark} />
        <Container>
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
              <div className="questions">
                <QuestionDisplay />
                <ProgressBar />
              </div>
              <div className="answers">
                <AnswerList />
              </div>
            </>
          )}
          {status === "finished" && (
            <>
              <Welcome />
              <div>
                <ScoreDisplay />
                <Button />
              </div>
            </>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
