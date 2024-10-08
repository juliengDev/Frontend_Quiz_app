import styled from "styled-components";

const Questions = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 46.5rem;
  width: 100%;
`;

const QuestionsContainer = ({ children }) => {
  return <Questions>{children}</Questions>;
};
export default QuestionsContainer;
