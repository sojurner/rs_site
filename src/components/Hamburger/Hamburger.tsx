import React from 'react';
import './Hamburger.css';

const Hamburger = ({ mounted, toggleMenu, menuDisplay }) => (
  <button
    className={mounted ? 'hamburger' : 'hamburger hamburger-hide'}
    onClick={toggleMenu}
  >
    <i className={menuDisplay ? 'fas fa-skull-crossbones' : 'fas fa-stream'} />
  </button>
);

export default Hamburger;
