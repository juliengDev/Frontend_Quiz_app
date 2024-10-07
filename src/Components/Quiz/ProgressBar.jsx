import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext";

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 16px;
  background-color: var(--color-pure-white);
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 8px;
  border-radius: 10px;
  width: ${(props) => props.$percentage}%;
  background-color: ${(props) =>
    props.$percentage === 100 ? "green" : "var(--color-Purple)"};
  transition: width 0.3s ease;
`;

const ProgressBar = () => {
  const { index, currentQuizz } = useQuizz();
  const totalQuestions = currentQuizz?.questions.length;
  const percentage = ((index + 1) / totalQuestions) * 100; // Calculer le pourcentage
  return (
    <ProgressBarContainer>
      <ProgressFill $percentage={percentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
