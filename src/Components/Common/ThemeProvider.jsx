import { useEffect } from "react";
import styled from "styled-components";

const getBackgroundImage = (theme, device) => {
  if (theme === "dark") {
    switch (device) {
      case "mobile":
        return "/images/pattern-background-mobile-dark.svg";
      case "tablet":
        return "/images/pattern-background-tablet-dark.svg";
      case "desktop":
      default:
        return "/images/pattern-background-desktop-dark.svg";
    }
  } else {
    switch (device) {
      case "mobile":
        return "/images/pattern-background-mobile-light.svg";
      case "tablet":
        return "/images/pattern-background-tablet-light.svg";
      case "desktop":
      default:
        return "/images/pattern-background-desktop-light.svg";
    }
  }
};

const Main = styled.main`
  background-image: ${({ $isDark }) =>
    `url(${getBackgroundImage($isDark ? "dark" : "light", "desktop")})`};
  background-repeat: no-repeat;
  /* background-position: center; */

  @media (max-width: 768px) {
    background-image: ${({ $isDark }) =>
      `url(${getBackgroundImage($isDark ? "dark" : "light", "tablet")})`};
  }

  @media (max-width: 480px) {
    background-image: ${({ $isDark }) =>
      `url(${getBackgroundImage($isDark ? "dark" : "light", "mobile")})`};
  }
`;

const ThemeProvider = ({ children, isDark }) => {
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", isDark ? "dark" : "light");

    // Clean-up function to reset the theme when the component unmounts
    return () => {
      body.removeAttribute("data-theme");
    };
  }, [isDark]);

  return (
    <Main className="container" $isDark={isDark}>
      {children}
    </Main>
  );
};

export default ThemeProvider;
