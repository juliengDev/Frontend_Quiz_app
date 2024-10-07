import styled from "styled-components";
import ToggleButton from "./ToggleButton";
import ThemeIcon from "./ThemeIcon.jsx";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.7rem 0rem;
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
