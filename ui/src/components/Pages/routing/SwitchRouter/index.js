import React from 'react';
import _ from 'lodash/fp';
import { Switch } from 'react-router-dom';
import PropsRoute from '../PropsRoute';

const SwitchRouter = ({ pages, ...routerProps }) => (
  <Switch>
    { _.map(pageProps => (
      <PropsRoute
        key={pageProps.path || 'not found'}
        {...pageProps}
        {...routerProps}
      />
    ), pages)}
  </Switch>
);

export default SwitchRouter;
