import React from 'react';
import styled from 'styled-components';
import HeaderSection from 'Components/organisms/HeaderSection';
import PricingSection from 'Components/organisms/PricingSection';
import ReviewSection from 'Components/organisms/ReviewSection';
import { Wrapper } from 'utils/StyledComponents';

const StyledWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 5vw;
  height: 100%;
`;

const Home = () => (
  <StyledWrapper>
    <HeaderSection />
    <PricingSection />
    <ReviewSection />
  </StyledWrapper>
);

export default Home;
