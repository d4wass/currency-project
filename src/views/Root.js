import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App, Converter, Home } from 'views';
import { routes } from 'routes/routes';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.converter} component={Converter} />
      <Route exact path={routes.testing} component={App} />
    </Switch>
  </Router>
);

export default Root;
