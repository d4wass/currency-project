import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRectangle = styled(animated.div)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: yellow;
`;

const App = () => {
  const [isMouseOver, toggle] = useState(false);
  const props = useSpring({
    to: [{ width: isMouseOver ? `200px` : `100px`, height: isMouseOver ? `200px` : `100px` }],
    from: { height: `100px`, width: `100px` },
  });

  return (
    <StyledWrapper>
      <StyledRectangle
        onMouseOver={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
        style={props}
      />
    </StyledWrapper>
  );
};
export default App;
