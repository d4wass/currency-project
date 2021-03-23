import React from 'react';
import styled from 'styled-components';
import Span from 'Components/atoms/Span';

const StyledWrapper = styled.div``;

const StyledTitle = styled.h1`
  color: #fff;
`;

const Logo = () => (
  <StyledWrapper>
    <StyledTitle>
      Maker<Span>*</Span>
    </StyledTitle>
  </StyledWrapper>
);

export default Logo;
