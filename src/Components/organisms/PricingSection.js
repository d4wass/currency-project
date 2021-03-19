import React from 'react';
import styled from 'styled-components';
import Header from 'Components/atoms/Header';
import Cards from 'Components/molecules/Cards';

const StyledWrapper = styled.div`
  height: 100vh;
  padding-top: 200px;
`;

const StyledSpan = styled.span`
  color: #fdc521;
`;

const StyledHeader = styled(Header)`
  text-align: center;
`;

const PricingSection = () => (
  <StyledWrapper>
    <StyledHeader>
      Ready to start with Maker<StyledSpan>*</StyledSpan>
    </StyledHeader>
    <Cards />
  </StyledWrapper>
);

export default PricingSection;
