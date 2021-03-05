import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Home } from 'assets/home-solid.svg';
import { ReactComponent as Converter } from 'assets/dollar-sign-solid.svg';
import { ReactComponent as Testing } from 'assets/question-solid.svg';
import { NavLink } from 'react-router-dom';

const NavigationListItem = styled.li`
  list-style: none;
  width: 100%;
  line-height: 40px;
`;

const StyledIcon = styled(Home, Converter, Testing)`
  height: 3vh;
  min-width: 3vw;
  max-width: 3vw;
`;

const StyledParagraph = styled.p`
  margin-left: 20px;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.color.grey};
`;

const NavItem = ({ isMouseOver, route }) => {
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
    <NavigationListItem isMouseOver={isMouseOver}>
      <StyledLink as={NavLink} to={route.to} key={route.name}>
        <StyledIcon as={handleLinkIcon(route.name)} />
        <StyledParagraph isMouseOver={isMouseOver}>{route.name}</StyledParagraph>
      </StyledLink>
    </NavigationListItem>
  );
};

NavItem.propTypes = {
  isMouseOver: PropTypes.bool.isRequired,
  route: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default NavItem;
