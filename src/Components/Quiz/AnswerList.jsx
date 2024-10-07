import { useState } from "react";
import { useQuizz } from "../../Context/QuizzContext";
import ThemeSelector from "../Home/ThemeSelector";
import Welcome from "../Home/Welcome";
import Button from "../Common/Button";
import styled from "styled-components";
import MainContainer from "../Common/MainContainer";

const AnswerContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const AnswerElement = styled.li``;

const AnswerList = ({ isDark }) => {
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
      backgroundColor: isDark ? "#3b4d66" : "#FFF",
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
      <MainContainer>
        <Welcome />
        <ThemeSelector />
      </MainContainer>
    );
  }

  return (
    <>
      <AnswerContainer>
        {currentQuestion.options.map((option) => (
          <AnswerElement key={option}>
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
          </AnswerElement>
        ))}
      </AnswerContainer>
      <Button
        isSubmitted={isSubmitted}
        hasNextQuestion={hasNextQuestion}
        onHandleSubmitAnswer={handleSubmitAnswer}
        onHandleNextQuestion={handleNextQuestion}
      />

      {showWarning && (
        <p style={{ marginTop: "2rem" }}>❌ Please select an answer</p>
      )}
    </>
  );
};

export default AnswerList;
