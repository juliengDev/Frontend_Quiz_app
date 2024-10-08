import styled from "styled-components";
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
  @media screen and (max-width: 375px), (max-device-width: 375px) {
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
  @media screen and (max-width: 375px), (max-device-width: 375px) {
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
      <img
        src={isOn ? "/images/icon-sun-light.svg" : "/images/icon-sun-dark.svg"}
        alt="Sun Icon"
      />
      <Switch data-ison={isOn} onClick={toggleTheme}>
        <Handle layout transition={spring} />
      </Switch>
      <img
        src={
          isOn ? "/images/icon-moon-light.svg" : "/images/icon-moon-dark.svg"
        }
        alt="Moon Icon"
      />
    </ToggleContainer>
  );
};
export default ToggleButton;
