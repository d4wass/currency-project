import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import store from './app/store/store';
import { fetchCurrency } from './app/actions/actions';

store.dispatch(fetchCurrency);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root'),
);
