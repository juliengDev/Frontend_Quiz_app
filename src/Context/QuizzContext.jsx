import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";
import reducer from "../Reducers/quizReducer";

const initialState = {
  quizzes: null,
  currentQuizz: null,
  theme: "",
  themes: ["HTML", "CSS", "Javascript", "Accessibility"],
  status: "loading",
  index: 0,
  points: 0,
  selectedAnswer: null,
};

//contextAPI
const QuizzContext = createContext();

function QuizzProvider({ children }) {
  const [
    {
      quizzes,
      title,
      questions,
      theme,
      status,
      index,
      currentQuizz,
      themes,
      selectedAnswer,
      points,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/data/data.json");
        const bdd = await res.json();
        const { quizzes: data } = bdd;
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
        console.error("Error : " + error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <QuizzContext.Provider
      value={{
        quizzes,
        title,
        questions,
        theme,
        dispatch,
        status,
        index,
        selectedAnswer,
        currentQuizz,
        themes,
        points,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
}

function useQuizz() {
  const context = useContext(QuizzContext);
  if (context === undefined)
    throw new Error("QuizzContext was used outside the QuizzProvider");
  return context;
}

export { QuizzProvider, useQuizz };
