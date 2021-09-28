import { NextPage } from 'next';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

interface TProps {
  props: any;
}

const AstroPage: NextPage<TProps> = ({ props }) => {
  console.log('server props', props);

  return <div>ASTRO</div>;
};

AstroPage.getInitialProps = async (props: any) => {
  return {
    props: props,
  };
};

export default AstroPage;
