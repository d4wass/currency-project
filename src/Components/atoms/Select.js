import React, { useEffect, useState, useRef } from 'react';
import AsyncSelect from 'react-select/async';
import { loadOptions } from 'features/LoadOptions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSymbolValue, setBaseValue } from 'app/actions/actions';

const Select = ({ defOptions, name, setSymbol, setBase }) => {
  const [value, setValue] = useState('');
  // setting ref hook for run useEffect only for update of component
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (name === 'base') {
      setBase(value.label.slice(0, 3));
    } else {
      setSymbol(value.label.slice(0, 3));
    }
  });

  return (
    <AsyncSelect
      value={value}
      options={defOptions}
      defaultOptions={defOptions}
      loadOptions={loadOptions}
      onChange={setValue}
      name={name}
      cacheOptions
      isSearchable
      isClearable
    />
  );
};

Select.propTypes = {
  setSymbol: PropTypes.func.isRequired,
  setBase: PropTypes.func.isRequired,
  defOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setBase: (value) => dispatch(setBaseValue(value)),
  setSymbol: (value) => dispatch(setSymbolValue(value)),
});

export default connect(null, mapDispatchToProps)(Select);
