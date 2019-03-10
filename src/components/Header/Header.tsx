import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

interface IHeaderProps {
  navLinks: { name: string; link: string }[];
  toggleBlurred: Function;
}

const Header = ({ navLinks, toggleBlurred }) => {
  let [mounted, setMounted] = useState(false);
  let [menuDisplay, toggleMenuDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 11500);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    toggleMenuDisplay(!menuDisplay);
    toggleBlurred();
  };

  return (
    <>
      <button
        className={mounted ? 'hamburger' : 'hamburger hamburger-hide'}
        onClick={handleClick}
      >
        <i
          className={menuDisplay ? 'fas fa-skull-crossbones' : 'fas fa-stream'}
        />
      </button>
      <nav
        className={menuDisplay ? 'nav-header-show nav-header' : 'nav-header'}
      >
        {navLinks.map(navItem => {
          return (
            <li className="nav-link">
              <NavLink onClick={handleClick} exact to={`/${navItem.link}`}>
                {navItem.name}
              </NavLink>
            </li>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
