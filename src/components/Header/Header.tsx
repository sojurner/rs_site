import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation/Navigation';
import Hamburger from '../Hamburger/Hamburger';
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

  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    toggleMenuDisplay(!menuDisplay);
    toggleBlurred();
  };

  return (
    <>
      <Hamburger
        mounted={mounted}
        toggleMenu={toggleMenu}
        menuDisplay={menuDisplay}
      />
      <Navigation
        menuDisplay={menuDisplay}
        navLinks={navLinks}
        toggleMenu={toggleMenu}
      />
    </>
  );
};

export default Header;
