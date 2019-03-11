import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

interface iNavigationProps {
  menuDisplay: Boolean;
  navLinks: { name: string; link: string }[];
}

const Navigation = ({ menuDisplay, navLinks, toggleMenu }) => (
  <nav className={menuDisplay ? 'nav-header-show nav-header' : 'nav-header'}>
    {navLinks.map(navItem => {
      return (
        <li className="nav-link">
          <NavLink onClick={toggleMenu} exact to={`/${navItem.link}`}>
            {navItem.name}
          </NavLink>
        </li>
      );
    })}
  </nav>
);

export default Navigation;
