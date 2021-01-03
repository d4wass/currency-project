/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCurrency, fetchSelectedCurrency } from 'app/actions/actions';
import PropTypes from 'prop-types';
import Select from 'Components/atoms/Select';
import Button from 'Components/atoms/Button';

const Converter = ({
  isLoading,
  currency,
  fetchData,
  fetchSelectedData,
  baseValue,
  symbols,
  checked,
}) => {
  const [isChecked, setChecked] = useState(false);

  useEffect(async () => {
    await fetchData();
  }, []);

  const handleClick = async () => {
    if (baseValue && symbols) {
      await fetchSelectedData(baseValue, symbols);
      await setChecked(true);
    }
  };

  return (
    <>
      <h1>Converter</h1>
      <div>
        {!isLoading ? (
          <>
            <Select name="base" defOptions={currency} />
            <Select name="symbol" defOptions={currency} />
            <Button onClick={handleClick}>Check</Button>
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      {isChecked && (
        <div>
          <p>{`1 ${baseValue} = ${checked[0].value} ${checked[0].label}`} </p>
        </div>
      )}
    </>
  );
};

Converter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
  fetchSelectedData: PropTypes.func.isRequired,
  currency: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  checked: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  symbols: PropTypes.string,
  baseValue: PropTypes.string,
};

Converter.defaultProps = {
  symbols: null,
  baseValue: null,
};

const mapStateToProps = (state) => {
  const { currency, isLoading, baseValue, symbols, isCheckedLoading, checked } = state;
  return { currency, isLoading, baseValue, symbols, isCheckedLoading, checked };
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCurrency()),
  fetchSelectedData: (baseValue, symbols) => dispatch(fetchSelectedCurrency(baseValue, symbols)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
