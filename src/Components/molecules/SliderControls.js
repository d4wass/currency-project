import React from 'react';
import styled from 'styled-components';
import ControlBtn from 'Components/atoms/ControlBtn';
import { Wrapper } from 'utils/StyledComponents';

const StyledWrapper = styled(Wrapper)`
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 40%;
`;

const SliderControls = () => (
  <StyledWrapper>
    <ControlBtn left />
    <ControlBtn right />
  </StyledWrapper>
);

export default SliderControls;
