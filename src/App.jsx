import "./App.css";
import GlobalStyle from "./Styles/GlobalStyles";
import ThemeProvider from "./Components/Common/ThemeProvider";
import { useQuizz } from "./Context/QuizzContext";
import Header from "./Components/Common/Header";
import useLocalStorage from "use-local-storage";
import Welcome from "./Components/Home/Welcome";
import ThemeSelector from "./Components/Home/ThemeSelector";
import Loader from "./Components/Common/Loader";
import Error from "./Components/Common/Error";
import QuestionDisplay from "./Components/Quiz/QuestionDisplay";
import ProgressBar from "./Components/Quiz/ProgressBar";
import AnswerList from "./Components/Quiz/AnswerList";
import ScoreDisplay from "./Components/Results/ScoreDisplay";
import PlayAgainButton from "./Components/Results/PlayAgainButton";
import { Container } from "./Styles/GlobalStyles";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const { status } = useQuizz();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider isDark={isDark} setIsDark={setIsDark}>
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
            <div className="score">
              <ScoreDisplay />
              <PlayAgainButton />
            </div>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
