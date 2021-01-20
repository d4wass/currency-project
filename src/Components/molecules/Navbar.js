import React from 'react';
import PropTypes from 'prop-types';
import NavItem from 'Components/atoms/NavItem';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { routes } from 'routes/routes';
import { ReactComponent as Home } from 'assets/home-solid.svg';
import { ReactComponent as Converter } from 'assets/dollar-sign-solid.svg';
import { ReactComponent as Testing } from 'assets/question-solid.svg';

const StyledIcon = styled(Home, Converter, Testing)`
  height: 20px;
  width: 20px;
`;

const StyledWrapper = styled.nav`
  display: flex;
  flex-grow: 2;
  width: 100%;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const StyledParagraph = styled.p`
  margin-left: 20px;
  display: ${({ isMouseOver }) => (!isMouseOver ? 'none' : 'block')};
`;

const StyledLink = styled(NavItem)`
  /* display: flex;
    justify-content: center;
 

  ${({ isMouseOver }) =>
    isMouseOver &&
    css`
      justify-content: flex-start;
    `} */
`;

const Navbar = ({ isMouseOver }) => {
  const handleLinkIcon = (name) => {
    switch (name) {
      case 'Home':
        return Home;
      case 'Converter':
        return Converter;
      case 'Testing':
        return Testing;
      default:
        return Testing;
    }
  };

  return (
    <StyledWrapper>
      <StyledList>
        {routes.map((route) => (
          <StyledLink as={NavLink} to={route.to} key={route.name}>
            <StyledIcon as={handleLinkIcon(route.name)} />
            <StyledParagraph isMouseOver={isMouseOver}>{route.name}</StyledParagraph>
          </StyledLink>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

Navbar.propTypes = {
  isMouseOver: PropTypes.bool.isRequired,
};

export default Navbar;
