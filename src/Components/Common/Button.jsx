import { useQuizz } from "../../Context/QuizzContext";

function Button({
  isSubmitted,
  hasNextQuestion,
  onHandleSubmitAnswer,
  onHandleNextQuestion,
}) {
  const { status, dispatch } = useQuizz();
  const isFinished = status === "finished";
  const buttonStyles = {
    marginTop: "16px",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const handlePlayAgain = () => {
    dispatch({ type: "PlayAgain" });
  };

  return (
    <>
      {!isSubmitted && !isFinished && (
        <button
          onClick={onHandleSubmitAnswer}
          style={{
            ...buttonStyles,
            backgroundColor: "blue",
          }}
        >
          Soumettre la réponse
        </button>
      )}

      {isSubmitted && hasNextQuestion && (
        <button
          onClick={onHandleNextQuestion}
          style={{
            ...buttonStyles,
            backgroundColor: "green",
          }}
        >
          Question suivante
        </button>
      )}
      {isFinished && (
        <button
          onClick={handlePlayAgain}
          style={{
            ...buttonStyles,
            backgroundColor: "green",
          }}
        >
          PlayAgain
        </button>
      )}
    </>
  );
}
export default Button;
