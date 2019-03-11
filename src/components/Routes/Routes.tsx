import React from 'react';
import { Route } from 'react-router-dom';
import DynamicImports from '../DynamicImports/DynamicImports';

interface IRoutesProps {
  routes: { name: string; link: string }[];
}

const Routes = ({ routes }) => {
  const component_paths = routes.map((route, index) => (
    <Route
      key={`route-${index}`}
      exact
      path={`/${route.link}`}
      render={() => <DynamicImports load={route.route_load} />}
    />
  ));
  return <>{component_paths}</>;
};

export default Routes;
