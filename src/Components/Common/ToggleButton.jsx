import styled from "styled-components";
import { moonDark } from "../../../public/images/icon-moon-dark.jsx";
import { moonLight } from "../../../public/images/icon-moon-light.jsx";
import { sunDark } from "../../../public/images/icon-sun-dark.jsx";
import { sunLight } from "../../../public/images/icon-sun-light.jsx";
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