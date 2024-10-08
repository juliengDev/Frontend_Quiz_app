import styled from "styled-components";
import { moonDark } from "/images/icon-moon-dark.jsx";
import { moonLight } from "/images/icon-moon-light.jsx";
import { sunDark } from "/images/icon-sun-dark.jsx";
import { sunLight } from "/images/icon-sun-light.jsx";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Switch = styled.div`
  width: 48px;
  height: 28px;
  background-color: var(--toggle-bg);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2rem;
  padding: 0.2rem 0.4rem;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;
  @media (max-width: 375px) {
    width: 32px;
    height: 20px;
  }

  &[data-ison="true"] {
    justify-content: flex-end;
  }
`;

const Handle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: var(--toggle-fg);
  border-radius: 2em;
  @media (max-width: 375px) {
    width: 12px;
    height: 12px;
  }
`;

const ToggleButton = ({ isOn, setIsDark }) => {
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
export default ToggleButton;
