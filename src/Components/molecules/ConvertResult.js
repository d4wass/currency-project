import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div``;
const StyledParagraf = styled.p``;

const ConvertResult = ({
  baseQuantity,
  baseValue,
  baseChecked,
  symbolQuantity,
  symbolValue,
  symbolChecked,
}) => {
  const floatCurrency = (value, quantity = 1) => {
    const number = quantity * Number(value);
    return number.toFixed(2);
  };

  return (
    <StyledWrapper>
      <StyledParagraf>{`${baseQuantity ? `${baseQuantity}` : '1'} ${baseValue} = ${floatCurrency(
        baseQuantity,
        baseChecked[0].value,
      )} ${baseChecked[0].label}`}</StyledParagraf>
      <StyledParagraf>{`${
        symbolQuantity ? `${symbolQuantity}` : '1'
      } ${symbolValue} = ${floatCurrency(symbolChecked[0].value)} ${
        symbolChecked[0].label
      }`}</StyledParagraf>
    </StyledWrapper>
  );
};

ConvertResult.propTypes = {
  baseChecked: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  symbolChecked: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  symbolValue: PropTypes.string.isRequired,
  baseValue: PropTypes.string.isRequired,
  baseQuantity: PropTypes.number.isRequired,
  symbolQuantity: PropTypes.number.isRequired,
};

export default ConvertResult;
