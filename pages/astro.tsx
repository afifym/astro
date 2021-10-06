import { NextPage } from 'next';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

interface TProps {
  props: any;
}

const AstroPage: NextPage<TProps> = ({ props }) => {
  console.log('props', props);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>ASTRO</h1>
    </div>
  );
};

// AstroPage.getInitialProps = async (args: any) => {
//   console.log('args', args);
//   const req = args;
//   return {
//     props: {
//       other: null,
//       real: { ...args.req },
//     },
//   };
// };

export async function getServerSideProps(context: any) {
  const { cookies } = context.req;
  return {
    props: { props: cookies }, // will be passed to the page component as props
  };
}

export default AstroPage;
