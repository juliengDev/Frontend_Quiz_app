import { useState } from "react";
import { useQuizz } from "../../Context/QuizzContext";
import ThemeSelector from "../Home/ThemeSelector";
import Welcome from "../Home/Welcome";
import Button from "../Common/Button";
import styled from "styled-components";
import MainContainer from "../Common/MainContainer";
import correct from "../../assets/images/icon-correct.svg";
import incorrect from "../../assets/images/icon-incorrect.svg";

const AnswerContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const AnswerElement = styled.li`
  border-radius: 24px;
`;
const Index = styled.div`
  display: inline-block;
  font-size: 2.8rem;
  font-weight: 500;
  background-color: var(--color-Light-Grey);
  color: var(--color-Grey-Navy);
  border-radius: 8px;
  padding: 1.6rem 1.8rem 1.2rem;
  margin: 1.8rem 3rem 2rem 2rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Effet de hover uniquement si l'élément n'est pas sélectionné */
  ${(props) =>
    !props.$isSelected &&
    `
    button:hover & {
      background-color: var(--color-Light-Purple);
      color: var(--color-Purple);
    }
  `}

  /* Style actif quand l'option est sélectionnée */
  ${(props) =>
    props.$isSelected &&
    `
    background-color: var(--color-Purple);
    color: var(--color-pure-white);
  `}

  /* Style quand la réponse est correcte */
  ${(props) =>
    props.$isCorrect &&
    `
    background-color: #26D782; /* Vert pour réponse correcte */
    color: #ffffff; /* Blanc pour le texte */
  `}

  /* Style quand la réponse est incorrecte */
  ${(props) =>
    props.$isIncorrect &&
    `
    background-color: #EE5454; /* Rouge pour réponse incorrecte */
    color: #ffffff; /* Blanc pour le texte */
  `}
`;

const Answer = styled.p`
  font-size: 2.8rem;
  font-weight: 500;
  width: 100%;
`;
const IconContainer = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: 2rem;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  position: absolute;
  top: 0;
  right: 0;
`;

const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin-top: 2rem;
  font-size: 2.4rem;
  color: var(--color-Red);
  font-weight: 400;
`;
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
    dispatch({ type: "submitAnswer", payload: selectedAnswer });
  };

  const handleBackHomepage = () => {
    dispatch({ type: "finished" });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "nextQuestion" });
    setShowWarning(false);
  };

  const getButtonStyle = (option) => {
    let style = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      textAlign: "left",
      margin: "5px 0",
      borderRadius: "24px",
      border: "2px solid transparent",
      cursor: isSubmitted ? "default" : "pointer",
      backgroundColor: isDark ? "#3b4d66" : "#FFF",
      transition: "border 0.3s ease",
    };

    if (isSubmitted) {
      if (isCorrectAnswer(option) && selectedAnswer === option) {
        style.border = "2px solid green"; // Bordure verte pour la bonne réponse
      } else if (selectedAnswer === option) {
        style.border = "2px solid red"; // Bordure rouge pour la mauvaise réponse
      }
    } else if (option === selectedAnswer) {
      style.border = "2px solid var(--color-Purple)"; // Bordure violette pour l'option sélectionnée
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
        {currentQuestion.options.map((option, index) => (
          <AnswerElement key={option}>
            <button
              onClick={() => handleAnswerClick(option)}
              disabled={isSubmitted}
              style={getButtonStyle(option)}
            >
              <Index
                $isSelected={option === selectedAnswer}
                $isCorrect={isSubmitted && isCorrectAnswer(option)}
                $isIncorrect={
                  isSubmitted &&
                  !isCorrectAnswer(option) &&
                  option === selectedAnswer
                }
              >
                {String.fromCharCode(65 + index)}
              </Index>
              <Answer>{option}</Answer>
              <IconContainer>
                <Icon
                  src={correct}
                  alt="Correct answer"
                  $isVisible={isSubmitted && isCorrectAnswer(option)}
                />
                <Icon
                  src={incorrect}
                  alt="Incorrect answer"
                  $isVisible={
                    isSubmitted &&
                    !isCorrectAnswer(option) &&
                    option === selectedAnswer
                  }
                />
              </IconContainer>
            </button>
          </AnswerElement>
        ))}
      </AnswerContainer>
      <Button
        isSubmitted={isSubmitted}
        hasNextQuestion={hasNextQuestion}
        onHandleSubmitAnswer={handleSubmitAnswer}
        onHandleNextQuestion={handleNextQuestion}
        onHandleBackHomepage={handleBackHomepage}
      />

      {showWarning && (
        <Warning style={{ marginTop: "2rem", textAlign: "center" }}>
          <img src={incorrect} />
          Please select an answer
        </Warning>
      )}
    </>
  );
};

export default AnswerList;
