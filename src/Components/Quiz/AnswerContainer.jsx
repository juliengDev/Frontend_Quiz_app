import styled from "styled-components";

const Answer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 56.4rem;
`;
const AnswerContainer = ({ children }) => {
  return <Answer>{children}</Answer>;
};
export default AnswerContainer;
