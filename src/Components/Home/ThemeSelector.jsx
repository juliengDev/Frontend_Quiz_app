import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext";
import Icon from "../Common/Icon";
import { motion } from "framer-motion";

const ThemeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  max-width: 56.4rem;
  @media screen and (max-width: 870px) {
    max-width: 64rem;
  }
`;
const ThemeButtons = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
  padding: 2rem;
  border-radius: 12px;
  background-color: ${(props) => (props.$isDark ? "#3b4d66" : "#FFFFFF")};
  color: ${(props) => (props.$isDark ? "#FFFFFF" : "#000000")};
`;

const ThemeTitle = styled.p`
  font-size: 2.8rem;
  font-weight: 500;
  @media screen and (max-width: 375px), (max-device-width: 375px) {
    font-size: 1.8rem;
  }
`;
const ThemeSelector = ({ isDark }) => {
  const { dispatch, themes } = useQuizz();
  function handleSetTheme(theme) {
    dispatch({ type: "setTheme", payload: theme });
  }
  return (
    <ThemeList>
      {themes.map((theme) => (
        <ThemeButtons
          $isDark={isDark}
          key={theme}
          onClick={() =>
            handleSetTheme(theme === "Javascript" ? "JavaScript" : theme)
          }
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon theme={theme} />
          <ThemeTitle>
            {theme === "Javascript" ? "JavaScript" : theme}
          </ThemeTitle>
        </ThemeButtons>
      ))}
    </ThemeList>
  );
};
export default ThemeSelector;
