import { useEffect, useRef, useState } from "react";
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
import confetti from "canvas-confetti";

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const { status } = useQuizz();
  const [shouldShowConfetti, setShouldShowConfetti] = useState(false);
  const confettiShownRef = useRef(false);

  useEffect(() => {
    if (status === "finished" && !confettiShownRef.current) {
      setShouldShowConfetti(true);
      confettiShownRef.current = true;
    } else if (status !== "finished") {
      confettiShownRef.current = false;
    }
  }, [status]);

  useEffect(() => {
    if (shouldShowConfetti) {
      const duration = 2 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const runAnimation = () => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          setShouldShowConfetti(false);
          return;
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });

        requestAnimationFrame(runAnimation);
      };

      runAnimation();
    }
  }, [shouldShowConfetti]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider isDark={isDark}>
        <Header setIsDark={setIsDark} isDark={isDark} />
        <MainContainer>
          {status === "loading" && <Loader />}
          {status === "error" && (
            <Error message="Failed to load quizzes. Please refresh the page." />
          )}
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
