import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Hamburger from '../Hamburger/Hamburger';
import LandingContent from '../LandingContent/LandingContent';
import './Header.css';

interface IHeaderProps {
  navLinks: Array<{ name: string; link: string }>;
  toggleBlurred: Function;
  mounted: number;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  navLinks,
  toggleBlurred,
  mounted
}) => {
  const [menuDisplay, toggleMenuDisplay] = useState(false);
  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    toggleMenuDisplay(!menuDisplay);
    toggleBlurred();
  };

  return (
    <>
      <header>
        <LandingContent mounted={mounted} />
        <Hamburger
          mounted={mounted}
          toggleMenu={toggleMenu}
          menuDisplay={menuDisplay}
        />
      </header>
      <Navigation
        toggleMenu={toggleMenu}
        menuDisplay={menuDisplay}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
