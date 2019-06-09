import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes/Routes';
import Header from '../Header/Header';

import './App.css';

const routeLinks = [
  {
    name: 'Home',
    link: '',
    Component: React.lazy(() => import('../Home/Home'))
  },
  {
    name: 'About',
    link: 'about',
    Component: React.lazy(() => import('../About/About'))
  },
  {
    name: 'Skills',
    link: 'skills',
    Component: React.lazy(() => import('../Skills/Skills'))
  },
  {
    name: 'Projects',
    link: 'projects',
    Component: React.lazy(() => import('../Projects/Projects'))
  }
];

const App = () => {
  const [blurredBackground, setBlurred] = useState(false);
  const [mounted, setMounted] = useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setMounted(1);
    }, 4000);

    setTimeout(() => {
      setMounted(2);
    }, 8000);

    setTimeout(() => {
      setMounted(3);
    }, 11500);
  }, []);
  const toggleBackground = () => {
    setBlurred(!blurredBackground);
  };
  return (
    <Router>
      <>
        <Header
          mounted={mounted}
          navLinks={routeLinks}
          toggleBlurred={toggleBackground}
        />
        <div
          className={
            blurredBackground ? 'blurred-container container' : 'container'
          }
        >
          {mounted === 3 && <Routes routes={routeLinks} />}
        </div>
      </>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
