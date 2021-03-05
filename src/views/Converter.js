/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  fetchCurrency,
  fetchSelectedCurrency,
  reverseSelectedCurrencies,
  setSymbolQuantity,
  chartData,
} from 'app/actions/actions';
import PropTypes from 'prop-types';
import Select from 'Components/atoms/Select';
import Button from 'Components/atoms/Button';
import Input from 'Components/atoms/Input';
import ConvertResult from 'Components/molecules/ConvertResult';

const Converter = ({
  isLoading,
  currency,
  fetchData,
  fetchSelectedData,
  baseValue,
  symbolValue,
  baseChecked,
  symbolChecked,
  reverseSelect,
  baseQuantity,
  symbolQuantity,
  chart,
}) => {
  const [isChecked, setChecked] = useState(false);

  useEffect(async () => {
    await fetchData();
  }, []);

  const handleClick = async (e) => {
    const { name } = e.target;
    if (baseValue && symbolValue && name === 'check') {
      await fetchSelectedData(baseValue, symbolValue);
      await setChecked(true);
      await chart();
      console.log(baseChecked);
      // await symbolInp(Number(baseQuantity)*Number(baseChecked[0].value))
    } else if (baseValue && symbolValue && name === 'reverse') {
      reverseSelect();
      await fetchSelectedData(symbolValue, baseValue);
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
            <Input name="base" />
            <Input name="symbol" />
            <Button onClick={handleClick} name="check">
              Check
            </Button>
            <Button onClick={handleClick} name="reverse">
              Reverse Currencies
            </Button>
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      {isChecked && (
        <ConvertResult
          baseQuantity={baseQuantity}
          baseValue={baseValue}
          baseChecked={baseChecked}
          symbolQuantity={symbolQuantity}
          symbolValue={symbolValue}
          symbolChecked={symbolChecked}
        />
      )}
    </>
  );
};

Converter.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  fetchData: PropTypes.func.isRequired,
  chart: PropTypes.func.isRequired,
  fetchSelectedData: PropTypes.func.isRequired,
  reverseSelect: PropTypes.func.isRequired,
  baseQuantity: PropTypes.number.isRequired,
  symbolQuantity: PropTypes.number.isRequired,
  currency: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
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
  symbolValue: PropTypes.string,
  baseValue: PropTypes.string,
};

Converter.defaultProps = {
  symbolValue: null,
  baseValue: null,
};

const mapStateToProps = (state) => {
  const {
    currency,
    isLoading,
    baseValue,
    symbolValue,
    isCheckedLoading,
    symbolChecked,
    baseChecked,
    baseQuantity,
    symbolQuantity,
  } = state;
  return {
    currency,
    isLoading,
    baseValue,
    symbolValue,
    isCheckedLoading,
    symbolChecked,
    baseChecked,
    baseQuantity,
    symbolQuantity,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCurrency()),
  fetchSelectedData: (baseValue, symbolValue) =>
    dispatch(fetchSelectedCurrency(baseValue, symbolValue)),
  reverseSelect: () => dispatch(reverseSelectedCurrencies()),
  symbolInp: (value) => dispatch(setSymbolQuantity(value)),
  chart: () => dispatch(chartData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
