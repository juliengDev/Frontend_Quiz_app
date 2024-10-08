import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor || "transparent"};
  border-radius: 8px;
  /* padding: 0.8rem; */
  img {
    width: 56px;
    height: 56px;
  }
  @media screen and (max-width: 870px) {
    width: 4rem;
    height: 4rem;
    img {
      height: 28.57px;
      width: 28.57px;
    }
  }
`;

const Icon = ({ name, theme }) => {
  const iconName = theme ? `icon-${theme.toLowerCase()}` : "icon-default";
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

  const altText = name || `Icon for ${theme || "unknown"} theme`;

  return (
    <IconContainer $backgroundColor={bgColor}>
      <img src={`/images/${iconName}.svg`} alt={altText} />
    </IconContainer>
  );
};

export default Icon;
