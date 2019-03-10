import React, { useState, useEffect } from 'react';
import './LandingContent.css';

const LandingContent = () => {
  let [mounted, setMounted] = useState(0);
  let [display, setDisplay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(1);
    }, 4000);

    setTimeout(() => {
      setMounted(2);
    }, 9000);

    setTimeout(() => {
      setDisplay(true);
    }, 13000);
  }, []);

  const typedHeader = () => {
    switch (mounted) {
      case 2:
        return (
          // <div className="landing-main">
          <h1 className="landing-header">Rob Stringer</h1>
        );
      case 1:
        return (
          // <div className="landing-main">
          <h1 className="landing-header-initial-2">My name is...</h1>
          // </div>
        );
      default:
        return <h1 className="landing-header-initial-1">Hello</h1>;
    }
  };
  return (
    <div className="landing-main">
      {typedHeader()}
      <h5 className={display ? 'job-title job-title-show' : 'job-title'}>
        Software Developer
      </h5>
    </div>
  );
};

export default LandingContent;
