import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";

// useReduder
const initialState = {
  quizz: null,
  title: "",
  questions: null,
  theme: "Accessibility",
  // "loading","error","ready","active","finished",
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "setTheme":
      return { ...state, theme: action.payload };
    case "dataReceived":
      return { ...state, quizz: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
}

//contextAPI
const QuizzContext = createContext();

function QuizzProvider({ children }) {
  const [{ quizz, title, questions, theme, status }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("../data/data.json");
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

  function handleSetTheme() {
    dispatch({ type: "setTheme", action: "Accessibility" });
  }

  return (
    <QuizzContext.Provider
      value={{
        quizz,
        title,
        questions,
        theme,
        dispatch,
        status,
        handleSetTheme,
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
