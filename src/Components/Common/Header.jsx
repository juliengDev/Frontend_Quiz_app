import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext.jsx";
import Icon from "./Icon";
import ToggleButton from "./ToggleButton";

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

const IconTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
`;

const Header = ({ setIsDark, isDark }) => {
  const { theme } = useQuizz();

  return (
    <Head>
      <IconGroup
        style={{
          visibility: theme ? "visible" : "hidden",
          opacity: theme ? 1 : 0,
        }}
      >
        <Icon theme={theme} />
        <IconTitle>{theme === "Javascript" ? "JavaScript" : theme}</IconTitle>
      </IconGroup>

      <ToggleButton isOn={isDark} setIsDark={setIsDark} />
    </Head>
  );
};

export default Header;
