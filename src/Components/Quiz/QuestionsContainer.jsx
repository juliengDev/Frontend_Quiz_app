import styled from "styled-components";

const Questions = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionsContainer = ({ children }) => {
  return <Questions>{children}</Questions>;
};
export default QuestionsContainer;
