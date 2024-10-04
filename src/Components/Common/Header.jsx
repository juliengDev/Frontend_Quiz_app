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
  padding: 1.6rem 2.4rem 0;
`;
const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
const IconContainer = styled.div`
  padding: 1rem 1.3rem;
  background-color: ${(props) => props.$backgroundColor || "transparent"};
  border-radius: 8px;
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

const Header = ({ theme, toggleTheme, isDark }) => {
  return (
    <Head>
      {theme === "Accessibility" && (
        <IconGroup>
          <IconContainer $backgroundColor="var(--color-Light-Purple)">
            <Icon name="icon-accessibility" width="40" height="40" />
          </IconContainer>
          <IconTitle>{theme}</IconTitle>
        </IconGroup>
      )}
      <Toggle isOn={isDark} toggleSwitch={toggleTheme} />
    </Head>
  );
};
const Toggle = ({ isOn, toggleSwitch }) => {
  return (
    <ToggleContainer>
      {isOn ? sunLight : sunDark}
      <Switch data-ison={isOn} onClick={toggleSwitch}>
        <Handle layout transition={spring} />
      </Switch>
      {isOn ? moonLight : moonDark}
    </ToggleContainer>
  );
};

export default Header;
