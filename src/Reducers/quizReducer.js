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
        selectedAnswer: null,
      };
    }
    case "newAnswer":
      return {
        ...state,
        selectedAnswer: action.payload,
      };

    case "submitAnswer": {
      const isCorrect =
        state.currentQuizz.questions[state.index].answer === action.payload;

      return {
        ...state,

        status: "submit",
        points: isCorrect ? state.points + 1 : state.points,
      };
    }

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        selectedAnswer: null,
        status: "active",
      };
    case "finished":
      return { ...state, status: "finished" };
    case "playAgain":
      return {
        ...state,
        status: "ready",
        index: 0,
        points: 0,
        selectedAnswer: null,
        currentQuizz: null,
        theme: "",
      };
    default:
      throw new Error("Action unknown");
  }
}

export default reducer;
