import React, { useState, useEffect } from 'react';
import './LandingContent.css';

const LandingContent = ({ mounted }) => {
  const typedHeader = () => {
    switch (mounted) {
      case 2:
        return <h1 className="landing-header">Rob Stringer</h1>;
      case 1:
        return <h1 className="landing-header-initial-2">My name is...</h1>;
      case 0:
        return <h1 className="landing-header-initial-1">Hello</h1>;
      default:
        return <h1 className="landing-header">Rob Stringer</h1>;
    }
  };
  return <div className="landing-main">{typedHeader()}</div>;
};

export default LandingContent;
