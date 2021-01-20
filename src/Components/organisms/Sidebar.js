import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from 'Components/molecules/Navbar';
import Logo from 'Components/atoms/Logo';
import Help from 'Components/atoms/Help';
import { useSpring, animated } from 'react-spring';

const StyledWrapper = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.sidebar.dark};
  height: 100vh;
  width: 8vw;
  /* max-width: 80px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Sidebar = () => {
  const [isMouseOver, setMouseOver] = useState(false);
  const props = useSpring({
    to: [{ width: isMouseOver ? `15vw` : `8vw` }],
    from: { width: `8vw` },
  });

  return (
    <StyledWrapper
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      style={props}
    >
      <Logo />
      <Navbar isMouseOver={isMouseOver} />
      <Help />
    </StyledWrapper>
  );
};

export default Sidebar;
