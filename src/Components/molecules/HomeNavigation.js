import React from 'react';
import styled from 'styled-components';
import Logo from 'Components/atoms/Logo';
import HomeNavbar from 'Components/molecules/HomeNavbar';
import Button from 'Components/atoms/Button';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes/routes';

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 5vh 0;
  justify-content: space-between;
  align-items: center;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
`;

const HomeNavigation = () => (
  <StyledWrapper>
    <StyledContent>
      <Logo />
      <HomeNavbar />
    </StyledContent>
    <Button as={NavLink} to={routes[routes.length - 1].to}>
      Sign in
    </Button>
  </StyledWrapper>
);

export default HomeNavigation;
