import React from 'react';
import styled from 'styled-components';
import HeaderSection from 'Components/organisms/HeaderSection';
import PricingSection from 'Components/organisms/PricingSection';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: hsl(227, 11%, 16%);
  padding: 0 5vw;
`;

const Home = () => (
  <StyledWrapper>
    <HeaderSection />
    <PricingSection />
  </StyledWrapper>
);

export default Home;
