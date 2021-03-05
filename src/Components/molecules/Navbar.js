import React from 'react';
import PropTypes from 'prop-types';
import NavItem from 'Components/atoms/NavItem';
import styled from 'styled-components';
import { routes } from 'routes/routes';

const StyledWrapper = styled.nav`
  width: 100%;
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Navbar = ({ isMouseOver }) => (
  <StyledWrapper>
    <StyledList>
      {routes.map((route) => (
        <NavItem isMouseOver={isMouseOver} route={route} />
      ))}
    </StyledList>
  </StyledWrapper>
);

Navbar.propTypes = {
  isMouseOver: PropTypes.bool.isRequired,
};

export default Navbar;
