import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Customer from '~/pages/Customer';
import Financial from '~/pages/Financial';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/custumer" exact component={Customer} isPrivate />
      <Route path="/financial" exact component={Financial} isPrivate />
    </Switch>
  );
}
