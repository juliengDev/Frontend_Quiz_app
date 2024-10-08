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

const Main = styled.div`
  background-color: var(--background-color);
  color: var(--primary-text-color);
  padding: 9.7rem 14rem 28rem;
  margin: 0 auto;
  width: 100%;
  min-height: 100dvh;
  transition: background-color 250ms ease-in-out;

  background-image: ${({ $isDark }) =>
    `url(${getBackgroundImage($isDark ? "dark" : "light", "desktop")})`};
  background-repeat: no-repeat;

  @media screen and (max-width: 870px) {
    padding: 5.4rem 6.4rem 24.1rem;

    background-image: ${({ $isDark }) =>
      `url(${getBackgroundImage($isDark ? "dark" : "light", "tablet")})`};
  }

  @media screen and (max-width: 375px), (max-device-width: 375px) {
    padding: 2.6rem 2.4rem 25.1rem;

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

  return <Main $isDark={isDark}>{children}</Main>;
};

export default ThemeProvider;
