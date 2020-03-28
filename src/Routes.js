import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '@/pages/Home';
import LearnMore from '@/pages/LearnMore';
import NotFound from '@/pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/coronavirus-2019-outbreak" component={LearnMore} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
