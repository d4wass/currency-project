import React from 'react';
import styled from 'styled-components';
import Header from 'Components/atoms/Header';
import Cards from 'Components/molecules/Cards';
import Span from 'Components/atoms/Span';
import { Wrapper } from 'utils/StyledComponents';

const StyledWrapper = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled(Header)`
  text-align: center;
`;

const PricingSection = () => (
  <StyledWrapper>
    <StyledHeader>
      Ready to start with Maker<Span>*</Span>
    </StyledHeader>
    <Cards />
  </StyledWrapper>
);

export default PricingSection;
