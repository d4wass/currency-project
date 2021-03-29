import React from 'react';
import styled from 'styled-components';
import ControlBtn from 'Components/atoms/ControlBtn';
import { Wrapper } from 'utils/StyledComponents';
import PropTypes from 'prop-types';

const StyledWrapper = styled(Wrapper)`
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 40%;
`;

const SliderControls = ({ wrapper }) => (
  <StyledWrapper>
    <ControlBtn left wrapper={wrapper} />
    <ControlBtn right wrapper={wrapper} />
  </StyledWrapper>
);

SliderControls.propTypes = {
  wrapper: PropTypes.objectOf(PropTypes.element).isRequired,
};

export default SliderControls;
