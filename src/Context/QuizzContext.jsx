import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";

const initialState = {
  quizzes: null,
  currentQuizz: null,
  theme: "",
  themes: ["HTML", "CSS", "Javascript", "Accessibility"],
  status: "loading",
  index: 0,
  answer: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, quizzes: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "setTheme": {
      const selectedQuizz = state.quizzes.find(
        (q) => q.title === action.payload
      );
      return {
        ...state,
        theme: action.payload,
        currentQuizz: selectedQuizz,
        status: "selected",
        index: 0,
        answer: null,
      };
    }
    case "newAnswer": {
      const isCorrect =
        state.currentQuizz.questions[state.index].answer === action.payload;
      return {
        ...state,
        answer: action.payload,
        status: isCorrect ? "correct" : "wrong",
      };
    }
    case "submitAnswer":
      return {
        ...state,
        status: "answered",
        selectedAnswer: action.payload,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        status: "active",
      };
    default:
      throw new Error("Action unknown");
  }
}

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
      answer,
      currentQuizz,
      themes,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/src/assets/data/data.json");
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
        answer,
        currentQuizz,
        themes,
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
