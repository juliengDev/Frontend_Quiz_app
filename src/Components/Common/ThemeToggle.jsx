/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
`;

export const ThemeToggle = ({ children, isDark, setIsDark }) => {
  const [systemPreference, setSystemPreference] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemPreference(mediaQuery.matches);

    const handler = (e) => setSystemPreference(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    setIsDark(systemPreference);
  }, [systemPreference, setIsDark]);

  return (
    <Main className="container" data-theme={isDark ? "dark" : "light"}>
      {children}
    </Main>
  );
};
