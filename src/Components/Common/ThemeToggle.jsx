import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

// eslint-disable-next-line react/prop-types
export const ThemeToggle = ({ children }) => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [systemPreference, setSystemPreference] = useState(false);

  useEffect(() => {
    // Vérifier la préférence système initiale
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemPreference(mediaQuery.matches);

    // Écouter les changements de préférence système
    const handler = (e) => setSystemPreference(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Nettoyer l'écouteur lors du démontage du composant
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    // Mettre à jour le thème lorsque la préférence système change
    setIsDark(systemPreference);
  }, [systemPreference, setIsDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="container" data-theme={isDark ? "dark" : "light"}>
      <Toggle handleChange={toggleTheme} isChecked={isDark} />
      {children}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function Toggle({ handleChange, isChecked }) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Mode sombre</label>
    </div>
  );
}
