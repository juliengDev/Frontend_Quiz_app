import React, { useState } from "react";
import { useQuizz } from "../../Context/QuizzContext";
import { Container } from "../../Styles/GlobalStyles";
import ThemeSelector from "../Home/ThemeSelector";
import Welcome from "../Home/Welcome";

const AnswerList = () => {
  const { currentQuizz, index, dispatch, status } = useQuizz();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const currentQuestion = currentQuizz?.questions[index];

  const handleAnswerClick = (answer) => {
    if (status !== "answered") {
      setSelectedAnswer(answer);
      setShowWarning(false);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      setShowWarning(true);
      return;
    }
    dispatch({ type: "submitAnswer", payload: selectedAnswer });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "nextQuestion" });
    setSelectedAnswer(null);
    setShowWarning(false);
  };

  const isCorrectAnswer = (option) => option === currentQuestion?.answer;
  const isAnswered = status === "answered";

  if (!currentQuizz) {
    return (
      <Container>
        <Welcome />
        <ThemeSelector />
      </Container>
    );
  }

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion?.options.map((option) => (
          <li key={option}>
            <button
              onClick={() => handleAnswerClick(option)}
              disabled={isAnswered}
              style={{
                border: isAnswered
                  ? isCorrectAnswer(option)
                    ? "2px solid green"
                    : option === selectedAnswer
                    ? "2px solid red"
                    : "2px solid transparent"
                  : option === selectedAnswer
                  ? "2px solid blue"
                  : "2px solid transparent",
                backgroundColor: "white",
                padding: "10px",
                margin: "5px",
                cursor: isAnswered ? "default" : "pointer",
              }}
            >
              {option}
              {isAnswered && isCorrectAnswer(option) && " ✅"}
              {isAnswered &&
                !isCorrectAnswer(option) &&
                option === selectedAnswer &&
                " ❌"}
            </button>
          </li>
        ))}
      </ul>
      {showWarning && (
        <p style={{ color: "red" }}>
          Veuillez sélectionner une réponse avant de soumettre.
        </p>
      )}
      {!isAnswered ? (
        <button onClick={handleSubmitAnswer}>Soumettre la réponse</button>
      ) : (
        <button onClick={handleNextQuestion}>Question suivante</button>
      )}
    </div>
  );
};

export default AnswerList;
