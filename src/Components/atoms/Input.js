import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setBaseQuantity, setSymbolQuantity } from 'app/actions/actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 10px;
`;

const Input = ({ name, symbolQuantity, baseQuantity }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (name === 'base') {
      baseQuantity(inputValue);
    } else {
      symbolQuantity(inputValue);
    }
  });

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledInput
      value={inputValue}
      name={name}
      onChange={(e) => handleInput(e)}
      placeholder={name}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  baseQuantity: PropTypes.func.isRequired,
  symbolQuantity: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  baseQuantity: (value) => dispatch(setBaseQuantity(value)),
  symbolQuantity: (value) => dispatch(setSymbolQuantity(value)),
});

export default connect(null, mapDispatchToProps)(Input);
