import styled from "styled-components";

const PrimaryTitle = styled.h1`
  font-size: 6.4rem;
  font-weight: 300;
  margin-bottom: 4.6rem;
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
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PrimaryTitle>
        Welcome to the
        <br />
        <BoldPrimaryTitle>Frontend Quiz!</BoldPrimaryTitle>
      </PrimaryTitle>
      <SecondaryTitle>Pick a subject to get started.</SecondaryTitle>
    </div>
  );
};
export default Welcome;
