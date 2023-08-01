import styled from 'styled-components';

export default function Home() {
  return (
    <Box>
      <Greetings>Hello there 👋</Greetings>
    </Box>
  );
}

const Box = styled.section`
  margin: auto;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const Greetings = styled.h1`
  font-size: 40px;
  font-family: Arial;
  font-weight: 700;
`;
