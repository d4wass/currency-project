import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from 'Components/molecules/Navbar';
import { useSpring, animated } from 'react-spring';
// import Logo from 'Components/atoms/Logo';
// import Help from 'Components/atoms/Help';

const StyledWrapper = styled(animated.div)`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  padding: 1vh 1vw;
  background-color: ${({ theme }) => theme.sidebar.dark};
  height: 100vh;
  /* width: 5vw; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  /* transition: .3s ease; */

  &:hover {
    width: 20vw;
  }
`;

const Sidebar = () => {
  const [isMouseOver, setMouseOver] = useState(false);

  const props = useSpring({
    to: [{ width: isMouseOver ? `18vw` : `5vw` }],
    from: { width: `5vw` },
  });

  return (
    <StyledWrapper
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      style={props}
    >
      <Navbar isMouseOver={isMouseOver} />
    </StyledWrapper>
  );
};

export default Sidebar;
