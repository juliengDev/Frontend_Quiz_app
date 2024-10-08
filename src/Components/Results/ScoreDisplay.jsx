import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext";
import ThemeIcon from "../Common/ThemeIcon";
import Button from "../Common/Button";

const ScoreContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 56.4rem;
`;
const Score = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  align-items: center;
  background-color: ${(props) =>
    props.$isDark ? "#3b4d66" : "var(--color-pure-white)"};
  border-radius: 24px;
  padding: 6.2rem 0 4.8rem 0;
  text-align: center;
`;
const ScoreDisplay = ({ isDark }) => {
  const { points, currentQuizz } = useQuizz();
  const totalQuestions = currentQuizz?.questions.length || 0;
  return (
    <ScoreContainer>
      <Score $isDark={isDark}>
        <ThemeIcon />
        <p style={{ fontSize: "14.4rem", fontWeight: "500" }}>{points}</p>
        <p
          style={{
            color: "var(--color-Light-Bluish)",
            fontSize: "2.4rem",
            fontWeight: "400",
          }}
        >
          out of {totalQuestions}
        </p>
      </Score>
      <Button />
    </ScoreContainer>
  );
};
export default ScoreDisplay;
