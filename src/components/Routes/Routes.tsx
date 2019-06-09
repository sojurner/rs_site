import React from 'react';
import { Route } from 'react-router-dom';
import Loading from '../Loading/Loading';

interface IRoutesProps {
  routes: { name: string; link: string }[];
}

const Routes = ({ routes }) => {
  const Components = routes.map((route, index) => (
    <Route
      key={`route-${index}`}
      exact={true}
      path={`/${route.link}`}
      component={route.Component}
    />
  ));
  return <React.Suspense fallback={Loading}>{Components}</React.Suspense>;
};

export default Routes;
