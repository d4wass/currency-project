import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from 'Components/molecules/Navbar';
import Logo from 'Components/atoms/Logo';
import Help from 'Components/atoms/Help';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.sidebar.dark};
  transform: ${({ isMouseOver }) => isMouseOver === true && 'translateX(180vw)'};
  transition: all 0.3s ease-in-out;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Sidebar = () => {
  const [isMouseOver, setMouseOver] = useState(false);

  console.log(isMouseOver);

  return (
    <StyledWrapper onMouseOver={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
      <Logo />
      <Navbar isMouseOver={isMouseOver} />
      <Help />
    </StyledWrapper>
  );
};

export default Sidebar;
