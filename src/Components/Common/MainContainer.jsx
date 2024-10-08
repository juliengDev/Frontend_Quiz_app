import styled from "styled-components";

const SectionMain = styled.main`
  display: flex;
  gap: 13.1rem;
  @media screen and (max-width: 870px) {
    flex-direction: column;
    gap: 6.4rem;
  }
  @media screen and (max-width: 375px), (max-device-width: 375px) {
    gap: 4rem;
  }
`;

function MainContainer({ children }) {
  return <SectionMain>{children}</SectionMain>;
}
export default MainContainer;
