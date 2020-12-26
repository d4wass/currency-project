import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrency } from 'app/actions/actions';

const App = ({ fetchData, currency }) => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(async () => {
    await fetchData();
    await setCurrencies(Object.keys(currency).map((key) => ({ name: key, rate: currency[key] })));
  }, []);

  return (
    <div>
      <h1>hello world</h1>
      <p>this is subtitle for hello world</p>
      <div>
        {currencies.map((item) => (
          <div>
            <p>{item.name}</p>
            <p>{item.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  currency: PropTypes.objectOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => {
  const { currency } = state;
  return { currency };
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
