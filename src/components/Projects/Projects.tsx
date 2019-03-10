import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);

  return (
    <div
      className={
        mounted
          ? 'projects-container-show projects-container'
          : 'projects-container'
      }
    >
      <h1>Projects</h1>
      <p>
        LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Projects;
