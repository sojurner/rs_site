import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import LandingContent from '../LandingContent/LandingContent';
import Routes from '../Routes/Routes';
import Header from '../Header/Header';

import './App.css';

const routeLinks = [
  { name: 'Home', link: '', route_load: () => import('../Home/Home') },
  { name: 'About', link: 'about', route_load: () => import('../About/About') },
  {
    name: 'Skills',
    link: 'skills',
    route_load: () => import('../Skills/Skills')
  },
  {
    name: 'Projects',
    link: 'projects',
    route_load: () => import('../Projects/Projects')
  }
];

const App = () => {
  let [blurredBackground, setBlurred] = useState(false);
  const toggleBackground = () => {
    setBlurred(!blurredBackground);
  };
  return (
    <Router>
      <>
        <Header navLinks={routeLinks} toggleBlurred={toggleBackground} />
        <div
          className={
            blurredBackground ? 'blurred-container container' : 'container'
          }
        >
          <>
            <LandingContent />
            <Routes routes={routeLinks} />
          </>
        </div>
      </>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
