import styled from "styled-components";
import { useQuizz } from "../../Context/QuizzContext";

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-self: start;
  gap: 4.8rem;
  @media screen and (max-width: 870px) {
    gap: 1.6rem;
  }
`;
const PrimaryTitle = styled.h1`
  font-size: 6.4rem;
  font-weight: 300;
  margin-bottom: 8px;
  @media screen and (max-width: 375px) {
    font-size: 4rem;
  }
`;
const BoldPrimaryTitle = styled.span`
  font-weight: 500;
`;

const SecondaryTitle = styled.p`
  font-size: 2rem;
  font-style: italic;
  color: var(--color-Grey-Navy);
`;

const Welcome = () => {
  const { status } = useQuizz();
  const isFinished = status === "finished";
  return (
    <TitleContainer>
      <PrimaryTitle>
        {isFinished ? "Quizz completed" : "Welcome to the"}
        <br />
        <BoldPrimaryTitle>
          {isFinished ? "You Scored..." : " Frontend Quiz!"}
        </BoldPrimaryTitle>
      </PrimaryTitle>
      <SecondaryTitle>
        {isFinished ? "" : "Pick a subject to get started."}
      </SecondaryTitle>
    </TitleContainer>
  );
};
export default Welcome;
