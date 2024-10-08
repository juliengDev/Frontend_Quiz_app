import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext";

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 16px;
  background-color: ${(props) =>
    props.$isDark ? "#3b4d66" : "var(--color-pure-white)"};
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12.4rem;

  @media screen and (max-width: 375px) {
    margin-bottom: 0rem;
  }
`;

const ProgressFill = styled.div`
  height: 8px;
  margin: 0 2px;
  border-radius: 10px;
  width: ${(props) => props.$percentage}%;
  background-color: ${(props) =>
    props.$percentage === 100 ? "green" : "var(--color-Purple)"};
  transition: width 0.3s ease;
`;

const ProgressBar = ({ isDark }) => {
  const { index, currentQuizz } = useQuizz();
  const totalQuestions = currentQuizz?.questions.length;
  const percentage = ((index + 1) / totalQuestions) * 100; // Calculer le pourcentage
  return (
    <ProgressBarContainer $isDark={isDark}>
      <ProgressFill $percentage={percentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
