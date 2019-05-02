import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Login from './Login';
import App from './App'

const unauthenticatedPages = ['/'];
const authenticatedPages = ['/app'];

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />
    <Route path="/app" component={App} />
    {/* <Route path="*" component={NotFound}/> */}
  </Router>
);
