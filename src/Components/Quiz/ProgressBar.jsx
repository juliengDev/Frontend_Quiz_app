import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext";

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
`;

const ProgressFill = styled.div`
  height: 20px;
  width: ${(props) => props.$percentage}%;
  background-color: ${(props) =>
    props.$percentage === 100 ? "green" : "blue"};
  transition: width 0.3s ease;
`;

const ProgressBar = () => {
  const { index, currentQuizz } = useQuizz();
  const totalQuestions = currentQuizz?.questions.length;
  const percentage = (index / totalQuestions) * 100; // Calculer le pourcentage
  console.log(percentage);
  return (
    <ProgressBarContainer>
      <ProgressFill $percentage={percentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
