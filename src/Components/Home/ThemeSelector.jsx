import { useQuizz } from "../../Context/QuizzContext";

const ThemeSelector = () => {
  const { dispatch } = useQuizz();
  function handleSetTheme(theme) {
    dispatch({ type: "setTheme", payload: theme });
  }
  return (
    <ul>
      <button onClick={() => handleSetTheme("HTML")}>HTML</button>
      <button onClick={() => handleSetTheme("CSS")}>CSS</button>
      <button onClick={() => handleSetTheme("JavaScript")}>Javascript</button>
      <button onClick={() => handleSetTheme("Accessibility")}>
        Accessibility
      </button>
    </ul>
  );
};
export default ThemeSelector;
