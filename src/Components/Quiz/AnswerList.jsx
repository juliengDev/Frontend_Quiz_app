import { useState } from "react";
import { useQuizz } from "../../Context/QuizzContext";
import { Container } from "../../Styles/GlobalStyles";
import ThemeSelector from "../Home/ThemeSelector";
import Welcome from "../Home/Welcome";
import Button from "../Common/Button";

const AnswerList = () => {
  const { currentQuizz, index, dispatch, status, selectedAnswer } = useQuizz();
  const [showWarning, setShowWarning] = useState(false);
  const currentQuestion = currentQuizz?.questions[index];
  const hasNextQuestion = index < currentQuizz.questions.length - 1;
  const isCorrectAnswer = (option) => option === currentQuestion?.answer;
  const isSubmitted = status === "submit";

  const handleAnswerClick = (answer) => {
    dispatch({ type: "newAnswer", payload: answer });
    setShowWarning(false);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      setShowWarning(true);
      return;
    }
    if (index === currentQuizz?.questions.length - 1) {
      dispatch({ type: "finished" });
      return;
    }
    dispatch({ type: "submitAnswer", payload: selectedAnswer });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "nextQuestion" });
    setShowWarning(false);
  };

  const getButtonStyle = (option) => {
    let style = {
      width: "100%",
      textAlign: "left",
      padding: "12px",
      margin: "5px 0",
      borderRadius: "4px",
      cursor: isSubmitted ? "default" : "pointer",
      border: "2px solid transparent",
    };

    if (isSubmitted) {
      if (isCorrectAnswer(option)) {
        style.border = "2px solid green";
      } else if (option === selectedAnswer) {
        style.border = "2px solid red";
      }
    } else if (option === selectedAnswer) {
      style.border = "2px solid purple";
    }

    return style;
  };

  if (!currentQuizz) {
    return (
      <Container>
        <Welcome />
        <ThemeSelector />
      </Container>
    );
  }

  return (
    <div style={{ padding: "16px" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentQuestion.options.map((option) => (
          <li key={option} style={{ marginBottom: "8px" }}>
            <button
              onClick={() => handleAnswerClick(option)}
              disabled={isSubmitted}
              style={getButtonStyle(option)}
            >
              <span>{option}</span>
              {isSubmitted && isCorrectAnswer(option) && (
                <span style={{ fontSize: "1.2em" }}>✅</span>
              )}
              {isSubmitted &&
                !isCorrectAnswer(option) &&
                option === selectedAnswer && (
                  <span style={{ fontSize: "1.2em" }}>❌</span>
                )}
            </button>
          </li>
        ))}
      </ul>
      <Button
        isSubmitted={isSubmitted}
        hasNextQuestion={hasNextQuestion}
        onHandleSubmitAnswer={handleSubmitAnswer}
        onHandleNextQuestion={handleNextQuestion}
      />

      {showWarning && (
        <p style={{ marginTop: "2rem" }}>❌ Please select an answer</p>
      )}
    </div>
  );
};

export default AnswerList;
