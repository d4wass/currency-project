import React from 'react';
import styled from 'styled-components';
import HeaderText from 'Components/molecules/HeaderText';
import HeaderImage from 'Components/molecules/HeaderImage';
import HomeNavigation from 'Components/molecules/HomeNavigation';
import { Wrapper } from 'utils/StyledComponents';

const StyledWrapper = styled(Wrapper)`
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  height: ${({ column }) => (column ? '100vh' : '100%')};
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
