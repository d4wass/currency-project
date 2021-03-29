import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'routes/routes';
import App from 'views/App';
import Converter from 'views/Converter';
import Home from 'views/Home';
import MainTemplate from 'templates/MainTemplate';
import AppProvider from 'providers/AppProvider';

const Root = () => (
  <AppProvider>
    <Router>
      <MainTemplate>
        <Switch>
          <Route exact path={routes[0].to} component={Home} />
          <Route exact path={routes[1].to} component={Converter} />
          <Route exact path={routes[2].to} component={App} />
        </Switch>
      </MainTemplate>
    </Router>
  </AppProvider>
);

export default Root;
