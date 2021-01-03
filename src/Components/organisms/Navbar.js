import React from 'react';
import NavItem from 'Components/atoms/NavItem';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from 'routes/routes';

const StyledWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
const StyledList = styled.ul`
  margin: 0;
  padding: 0;
`;

const Navbar = () => (
  <StyledWrapper>
    <StyledList>
      <NavItem as={NavLink} to={routes.home}>
        Home
      </NavItem>
      <NavItem as={NavLink} to={routes.converter}>
        Converter
      </NavItem>
      <NavItem as={NavLink} to={routes.testing}>
        Test
      </NavItem>
    </StyledList>
  </StyledWrapper>
);

export default Navbar;
