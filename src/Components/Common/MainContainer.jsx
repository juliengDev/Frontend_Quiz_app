import styled from "styled-components";

const SectionMain = styled.section`
  display: flex;
  gap: 14.3rem;
  @media (max-width: 870px) {
    flex-direction: column;
    gap: 6.4rem;
  }
  @media (max-width: 375px) {
    gap: 4rem;
  }
`;

function MainContainer({ children }) {
  return <SectionMain>{children}</SectionMain>;
}
export default MainContainer;
