import React from 'react';
import styled from 'styled-components';
import HeaderSection from 'Components/molecules/HeaderSection';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
  background-color: hsl(227, 11%, 16%);
  padding: 0 5vw;
`;

const Home = () => (
  <StyledWrapper>
    <HeaderSection />
  </StyledWrapper>
);

export default Home;
