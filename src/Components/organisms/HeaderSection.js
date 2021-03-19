import React from 'react';
import styled from 'styled-components';
import HeaderText from 'Components/molecules/HeaderText';
import HeaderImage from 'Components/molecules/HeaderImage';
import HomeNavigation from 'Components/molecules/HomeNavigation';

const StyledWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
`;

const HeaderSection = () => (
  <StyledWrapper column>
    <HomeNavigation />
    <StyledWrapper>
      <HeaderText />
      <HeaderImage />
    </StyledWrapper>
  </StyledWrapper>
);

export default HeaderSection;
