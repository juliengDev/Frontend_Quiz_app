import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext";
import Icon from "./Icon";

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const IconTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  @media screen and (max-width: 375px) {
    font-size: 1.8rem;
  }
`;

const ThemeIcon = () => {
  const { theme } = useQuizz();
  return (
    <IconGroup
      style={{
        visibility: theme ? "visible" : "hidden",
        opacity: theme ? 1 : 0,
      }}
    >
      <Icon theme={theme} />
      <IconTitle>{theme === "Javascript" ? "JavaScript" : theme}</IconTitle>
    </IconGroup>
  );
};
export default ThemeIcon;
