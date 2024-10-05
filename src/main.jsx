import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { QuizzProvider } from "./Context/QuizzContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QuizzProvider>
      <App />
    </QuizzProvider>
  </StrictMode>
);
