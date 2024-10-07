import { useQuizz } from "../../Context/QuizzContext";
import ThemeIcon from "../Common/ThemeIcon";

const ScoreDisplay = () => {
  const { points, currentQuizz } = useQuizz();
  const totalQuestions = currentQuizz?.questions.length || 0;
  console.log(points);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
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
    </div>
  );
};
export default ScoreDisplay;
