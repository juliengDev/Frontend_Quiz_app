import styled from "styled-components";

const Answer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswerContainer = ({ children }) => {
  return <Answer>{children}</Answer>;
};
export default AnswerContainer;
