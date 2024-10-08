import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import ThemeIcon from "./ThemeIcon.jsx";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8.5rem;

  @media screen and (max-width: 870px) {
    margin-bottom: 6.3rem;
  }

  @media screen and (max-width: 450px), (max-device-width: 450px) {
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
