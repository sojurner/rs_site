import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface IHeaderProps {
  navLinks: { name: string; link: string }[];
}

const Header = ({ navLinks }) => {
  let [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 14000);
  }, []);
  return (
    <nav className={mounted ? 'nav-header-show nav-header' : 'nav-header'}>
      {navLinks.map(navItem => {
        return (
          <li className="nav-link">
            <NavLink exact to={`/${navItem.link}`}>
              {navItem.name}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default Header;
