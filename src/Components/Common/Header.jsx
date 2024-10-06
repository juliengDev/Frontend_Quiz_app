import styled from "styled-components";

import Icon from "./Icon";

import { useQuizz } from "../../Context/QuizzContext.jsx";
import ToggleButton from "./ToggleButton.jsx";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.7rem 0rem;
`;
const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor || "transparent"};
  border-radius: 8px;
  width: 5.6rem;
  height: 5.6rem;
  img {
    height: 40px;
    width: 40px;
  }
  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    img {
      height: 28.57px;
      width: 28.57px;
    }
  }
  @media (max-width: 375px) {
  }
`;
const IconTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
`;

const Header = ({ setIsDark, isDark }) => {
  const { theme } = useQuizz();

  let bgColor = "";
  switch (theme) {
    case "Accessibility":
      bgColor = "var(--color-Light-Purple)";
      break;
    case "HTML":
      bgColor = "var(--color-Light-Orange)";
      break;
    case "CSS":
      bgColor = "var(--color-Light-Green)";
      break;
    case "Javascript":
      bgColor = "var(--color-Light-Blue)";
      break;
    default:
      bgColor = "transparent";
      break;
  }
  const iconName = `icon-${theme.toLowerCase()}`;
  return (
    <Head>
      <IconGroup
        style={{
          visibility: theme ? "visible" : "hidden",
          opacity: theme ? 1 : 0,
        }}
      >
        <IconContainer $backgroundColor={bgColor}>
          <Icon name={iconName} />
        </IconContainer>
        <IconTitle>{theme}</IconTitle>
      </IconGroup>

      <ToggleButton isOn={isDark} setIsDark={setIsDark} />
    </Head>
  );
};

export default Header;
