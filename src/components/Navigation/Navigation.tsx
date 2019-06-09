import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

interface iNavigationProps {
  menuDisplay: boolean;
  navLinks: Array<{ name: string; link: string }>;
  toggleMenu: Function;
}
const icons = [
  'fas fa-house-damage',
  'far fa-user-circle',
  'fas fa-braille',
  'fas fa-code'
];

const Navigation = ({ menuDisplay, navLinks, toggleMenu }) => (
  <>
    <div
      onClick={toggleMenu}
      className={menuDisplay ? 'nav-bg-show nav-bg' : 'nav-bg'}
    />
    <nav className={menuDisplay ? 'nav-header-show nav-header' : 'nav-header'}>
      {navLinks.map((navItem, index) => {
        return (
          <li className="nav-link" key={`nav-links-${index}`}>
            <i className={icons[index]} />
            <NavLink onClick={toggleMenu} exact={true} to={`/${navItem.link}`}>
              {navItem.name}
            </NavLink>
          </li>
        );
      })}
    </nav>
  </>
);

export default Navigation;
