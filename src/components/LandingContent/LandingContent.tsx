import React, { useState, useEffect } from 'react';
import './LandingContent.css';

const LandingContent = () => {
  let [mounted, setMounted] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setMounted(1);
    }, 4000);

    setTimeout(() => {
      setMounted(2);
    }, 9000);
  }, []);

  switch (mounted) {
    case 2:
      return (
        <div className="landing-main">
          <h1 className="landing-header">Rob Stringer</h1>
        </div>
      );
    case 1:
      return (
        <div className="landing-main">
          <h1 className="landing-header-initial-2">My name is...</h1>
        </div>
      );
    default:
      return (
        <div className="landing-main">
          <h1 className="landing-header-initial-1">Hello</h1>
        </div>
      );
  }
};

export default LandingContent;
