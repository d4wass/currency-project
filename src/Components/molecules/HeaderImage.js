import React from 'react';
import styled from 'styled-components';
import Circle from 'Components/atoms/Circle';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

const HeaderImage = () => (
  <StyledWrapper>
    <Circle height="350" width="350" r="130" cx="175" cy="175" fill="yellow" top="5%" left="10%" />
    <Circle height="150" width="150" r="70" cx="75" cy="75" fill="green" top="38%" right="30%" />
    <Circle
      height="250"
      width="250"
      r="110"
      cx="125"
      cy="125"
      fill="black"
      bottom="5%"
      right="15%"
    />
    <Circle height="400" width="400" r="190" cx="200" cy="200" fill="red" bottom="2%" left="-10%" />
  </StyledWrapper>
);

export default HeaderImage;
