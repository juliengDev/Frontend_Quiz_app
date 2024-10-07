import { useQuizz } from "../../Context/QuizzContext";

const QuestionDisplay = () => {
  const { currentQuizz, index } = useQuizz();
  const currentQuestion = currentQuizz?.questions[index];
  return (
    <h2
      style={{
        fontSize: "1.25rem",
        fontWeight: "bold",
        marginBottom: "16px",
      }}
    >
      {currentQuestion.question}
    </h2>
  );
};
export default QuestionDisplay;
