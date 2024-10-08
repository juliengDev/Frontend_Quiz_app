import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext";

const QuestionProgress = styled.p`
  font-style: italic;
  font-size: 2rem;
  line-height: 1.5;
  color: var(--color-Grey-Navy);
  margin-bottom: 2.7rem;
`;
const QuestionTitle = styled.h2`
  align-self: start;
  font-size: 3.6rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 18rem;
`;

const QuestionDisplay = () => {
  const { currentQuizz, index } = useQuizz();
  const currentQuestion = currentQuizz?.questions[index];

  return (
    <div>
      <QuestionProgress>
        Question {index + 1} of {currentQuizz?.questions?.length}
      </QuestionProgress>
      <QuestionTitle>{currentQuestion?.question}</QuestionTitle>
    </div>
  );
};
export default QuestionDisplay;
