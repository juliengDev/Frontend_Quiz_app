import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext";

const ButtonSubmit = styled.button`
  margin-top: 3.2rem;
  color: var(--color-pure-white);
  background-color: var(--color-Purple);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.2rem 0;
  border-radius: 24px;
  font-size: 2.8rem;
  font-weight: 500;

  @media screen and (max-width: 375px) {
    font-size: 1.8rem;
  }
`;
function Button({
  isSubmitted,
  hasNextQuestion,
  onHandleSubmitAnswer,
  onHandleNextQuestion,
  onHandleBackHomepage,
}) {
  const { status, dispatch, currentQuizz, index } = useQuizz();
  const isFinished = status === "finished";
  const isLastQuestion = index === currentQuizz.questions.length - 1;

  // console.log("isSubmitted : " + isSubmitted);
  // console.log("hasNextQuestion : " + hasNextQuestion);
  // console.log("isLastQuestion : " + isLastQuestion);

  const handlePlayAgain = () => {
    dispatch({ type: "playAgain" });
  };

  return (
    <>
      {!isSubmitted && !isFinished && (
        <ButtonSubmit onClick={onHandleSubmitAnswer}>
          Submit Answer
        </ButtonSubmit>
      )}

      {isSubmitted && hasNextQuestion && !isLastQuestion && (
        <ButtonSubmit onClick={onHandleNextQuestion}>
          Next Question
        </ButtonSubmit>
      )}
      {isSubmitted && !hasNextQuestion && isLastQuestion && (
        <ButtonSubmit onClick={onHandleBackHomepage}>
          Get your score
        </ButtonSubmit>
      )}

      {isFinished && (
        <ButtonSubmit onClick={handlePlayAgain}>PlayAgain</ButtonSubmit>
      )}
    </>
  );
}
export default Button;
