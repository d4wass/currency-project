import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'routes/routes';
import App from 'views/App';
import Converter from 'views/Converter';
import Home from 'views/Home';
import MainTemplate from 'templates/MainTemplate';

const Root = () => (
  <Router>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route exact path={routes.converter} component={Converter} />
        <Route exact path={routes.testing} component={App} />
      </Switch>
    </MainTemplate>
  </Router>
);

export default Root;
