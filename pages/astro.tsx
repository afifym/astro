import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const AstroPage = () => {
  useEffect(() => {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return <div>ASTRO</div>;
};

export default AstroPage;
