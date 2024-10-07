import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import ThemeIcon from "./ThemeIcon.jsx";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8.5rem;

  @media (max-width: 870px) {
    margin-bottom: 6.3rem;
  }
  @media (max-width: 375px) {
    margin-bottom: 3.2rem;
  }
`;

const Header = ({ setIsDark, isDark }) => {
  return (
    <Head>
      <ThemeIcon />
      <ToggleButton isOn={isDark} setIsDark={setIsDark} />
    </Head>
  );
};

export default Header;
