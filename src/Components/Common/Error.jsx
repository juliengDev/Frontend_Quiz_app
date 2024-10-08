import styled from "styled-components";

const ErrorContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid red;
  border-radius: 8px;
  padding: 20px;
  color: red;
  text-align: center;
  z-index: 1000;
`;

const ErrorMessage = styled.h2`
  font-size: 1.5rem;
`;

const Error = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>An error occurred!</ErrorMessage>
      <p>{message || "Something went wrong. Please try again."}</p>
    </ErrorContainer>
  );
};

export default Error;
