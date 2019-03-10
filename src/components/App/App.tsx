import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import LandingContent from '../LandingContent/LandingContent';
import Routes from '../Routes/Routes';
import Header from '../Header/Header';

const routeLinks = [
  { name: 'About', link: 'about' },
  { name: 'Skills', link: 'skills' },
  { name: 'Projects', link: 'projects' }
];

const App = () => (
  <div>
    <Router>
      <>
        <Header navLinks={routeLinks} />
        <LandingContent />
        <Routes routes={routeLinks} />
      </>
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
