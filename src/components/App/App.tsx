import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import LandingContent from '../LandingContent/LandingContent';
import Routes from '../Routes/Routes';
import Header from '../Header/Header';

import './App.css';

const routeLinks = [
  { name: 'About', link: 'about' },
  { name: 'Skills', link: 'skills' },
  { name: 'Projects', link: 'projects' }
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
