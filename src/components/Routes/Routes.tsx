import React from 'react';
import { Route } from 'react-router-dom';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import About from '../About/About';

interface IRoutesProps {
  routes: { name: string; link: string }[];
}

const Routes = ({ routes }) => {
  const components = [About, Skills, Projects];
  const component_paths = routes.map((route, index) => {
    const { name, link, component } = route;
    return (
      <Route
        key={`route-${index}`}
        path={`/${link}`}
        component={components[index]}
      />
    );
  });
  return <>{component_paths}</>;
};

export default Routes;
