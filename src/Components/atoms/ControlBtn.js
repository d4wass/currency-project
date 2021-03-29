import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Context from 'context/context';
import { ReactComponent as ChevronLeft } from 'assets/chevron-left-solid.svg';
import { ReactComponent as ChevronRight } from 'assets/chevron-right-solid.svg';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 25px;
  border-radius: 50%;
  border: solid 1px #fff;
  background-color: transparent;
  transition: all ease 0.3s;
  margin: 10px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #fdc521;
    border-color: #fdc521;
  }
`;

const StyledChevron = styled(ChevronLeft, ChevronRight)`
  height: 30px;
  width: 20px;

  path {
    fill: #fff;
  }
`;

const ControlBtn = ({ left, right, wrapper }) => (
  <Context.Consumer>
    {({ handleSliderClick }) => (
      <>
        {left && (
          <StyledButton onClick={(e) => handleSliderClick(wrapper, e)} id="left">
            <StyledChevron as={ChevronLeft} />
          </StyledButton>
        )}
        {right && (
          <StyledButton onClick={(e) => handleSliderClick(wrapper, e)} id="right">
            <StyledChevron as={ChevronRight} />
          </StyledButton>
        )}
      </>
    )}
  </Context.Consumer>
);

ControlBtn.propTypes = {
  left: PropTypes.bool.isRequired,
  right: PropTypes.bool.isRequired,
  wrapper: PropTypes.objectOf(PropTypes.element).isRequired,
};

export default ControlBtn;
