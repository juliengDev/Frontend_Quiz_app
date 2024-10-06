import styled from "styled-components";
import { motion } from "framer-motion";

import Icon from "./Icon";
import { moonDark } from "../../../public/images/icon-moon-dark.jsx";
import { moonLight } from "../../../public/images/icon-moon-light.jsx";
import { sunDark } from "../../../public/images/icon-sun-dark.jsx";
import { sunLight } from "../../../public/images/icon-sun-light.jsx";
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

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
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Switch = styled.div`
  width: 3rem;
  height: 2rem;
  background-color: var(--toggle-bg);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2rem;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &[data-ison="true"] {
    justify-content: flex-end;
  }
`;

const Handle = styled(motion.div)`
  width: 1.2em;
  height: 1.2em;
  background-color: var(--toggle-fg);
  border-radius: 2em;
`;

const Header = ({ setIsDark, theme, isDark }) => {
  let bgColor = "";
  switch (theme) {
    case "Accessibility":
      bgColor = "var(--color-Light-Purple)";
      break;
    case "HTML":
      "var(--color-red)";
      break;
    case "CSS":
      "var(--color-neonGreen)";
      break;
    case "Javascript":
      "var(--color-yellow)";
      break;
    default:
      bgColor = "transparent";
      break;
  }
  return (
    <Head>
      {theme === "Accessibility" && (
        <IconGroup>
          <IconContainer $backgroundColor={bgColor}>
            <Icon name="icon-accessibility" />
          </IconContainer>
          <IconTitle>{theme}</IconTitle>
        </IconGroup>
      )}
      <Toggle isOn={isDark} setIsDark={setIsDark} />
    </Head>
  );
};
const Toggle = ({ isOn, setIsDark }) => {
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <ToggleContainer>
      {isOn ? sunLight : sunDark}
      <Switch data-ison={isOn} onClick={toggleTheme}>
        <Handle layout transition={spring} />
      </Switch>
      {isOn ? moonLight : moonDark}
    </ToggleContainer>
  );
};

export default Header;
