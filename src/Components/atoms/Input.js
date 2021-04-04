import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  margin-bottom: 35px;
`;

const StyledLabel = styled.label`
  display: block;
  position: absolute;
  top: 35%;
  left: 0;
  pointer-events: none;
  transition: 0.3s;
  color: ${({ theme }) => theme.color.white};
`;

const StyledSpanLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  content: '';
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 1px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent;
  border: none;
  font-size: 1.2em;
  outline: none;
  color: ${({ theme }) => theme.color.white};

  &:focus + ${StyledLabel} {
    transform: translatey(-35px);
    font-size: 13px;
    color: ${({ theme }) => theme.color.yellow};
  }

  &:hover + ${StyledSpanLine} {
    background: ${({ theme }) => theme.color.yellow};
  }
`;

const Input = ({ type, label, name }) => (
  <StyledWrapper>
    <StyledInput type={type} name={name} />
    <StyledLabel>{label}</StyledLabel>
    <StyledSpanLine />
  </StyledWrapper>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
