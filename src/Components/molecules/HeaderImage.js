import React from 'react';
import styled from 'styled-components';
import Circle from 'Components/atoms/Circle';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 90%;
  width: 100%;
`;

const StyledContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderImage = () => (
  <StyledContent>
    <StyledWrapper>
      <Circle
        height="350"
        width="350"
        color="rgba(255,255,255,0.4)"
        top="0%"
        left="10%"
        noBg
        glass
      />
      <Circle height="150" width="150" color="#9e8fb2" top="38%" right="30%" gradient="#a7acd9" />
      <Circle height="250" width="250" color="#000000" gradient="#414141" bottom="5%" right="15%" />
      <Circle height="400" width="400" color="#fdc521" bottom="0%" left="0%" noBg />
    </StyledWrapper>
  </StyledContent>
);

export default HeaderImage;
