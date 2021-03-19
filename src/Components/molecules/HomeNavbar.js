import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const routes = [
  { name: 'Price', to: '/price' },
  { name: 'Reviews', to: '/reviews' },
  { name: 'Contacts', to: '/contacts' },
];

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 80px;
`;
const StyledSpan = styled.span`
  visibility: hidden;
  /* transition: all ease-in-out .3s; */
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin-right: 40px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  transition: all ease-in-out 0.3s;

  &:hover {
    color: #fdc521;
  }

  &:hover ${StyledSpan} {
    color: #fff;
    visibility: visible;
  }
`;

const HomeNavbar = () => (
  <StyledList>
    {routes.map((route) => (
      <StyledLink to={route.to} key={route.name}>
        {route.name}
        <StyledSpan>*</StyledSpan>
      </StyledLink>
    ))}
  </StyledList>
);

export default HomeNavbar;
