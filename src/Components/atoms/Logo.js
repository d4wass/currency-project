import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div``;

const StyledTitle = styled.h1`
  color: #fff;
`;

const StyledSpan = styled.span`
  color: #fdc521;
`;

const Logo = () => (
  <StyledWrapper>
    <StyledTitle>
      Maker<StyledSpan>*</StyledSpan>
    </StyledTitle>
  </StyledWrapper>
);

export default Logo;
