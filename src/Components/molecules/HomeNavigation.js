import React from 'react';
import styled from 'styled-components';
import Logo from 'Components/atoms/Logo';
import HomeNavbar from 'Components/molecules/HomeNavbar';
import Button from 'Components/atoms/Button';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 3vh 0;
  justify-content: center;
  align-items: center;
`;

const HomeNavigation = () => (
  <StyledWrapper>
    <Logo />
    <HomeNavbar />
    <Button>Sign in</Button>
  </StyledWrapper>
);

export default HomeNavigation;
