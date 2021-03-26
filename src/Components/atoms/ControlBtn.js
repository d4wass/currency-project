import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as ChevronLeft } from 'assets/chevron-left-solid.svg';
import { ReactComponent as ChevronRight } from 'assets/chevron-right-solid.svg';
import { Wrapper } from 'utils/StyledComponents';

const StyledWrapper = styled(Wrapper)`
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  border-radius: 50%;
  border: solid 1px #fff;
  height: 20px;
  margin: 10px;
`;

const StyledChevron = styled(ChevronLeft, ChevronRight)`
  height: 30px;
  width: 20px;
  path {
    fill: #fff;
  }
`;

const ControlBtn = ({ left, right }) => (
  <div>
    {left && (
      <StyledWrapper>
        <StyledChevron as={ChevronLeft} />
      </StyledWrapper>
    )}
    {right && (
      <StyledWrapper>
        <StyledChevron as={ChevronRight} />
      </StyledWrapper>
    )}
  </div>
);

ControlBtn.propTypes = {
  left: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
};

export default ControlBtn;
