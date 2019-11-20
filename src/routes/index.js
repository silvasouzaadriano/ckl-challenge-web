import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import News from '../pages/News';
import Interest from '../pages/Interest';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={News} />
    </Switch>
  );
}
