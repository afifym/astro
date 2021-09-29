import { NextPage } from 'next';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

interface TProps {
  props: any;
}

const AstroPage: NextPage<TProps> = ({ props }) => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const onClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Clicked a button',
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ASTRO</h1>
      <button onClick={onClick}>Click here!</button>
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

// export async function getServerSideProps(context: any) {
//   console.log('props -------------------------', context.req);
//   return {
//     props: { props: context.req || {} }, // will be passed to the page component as props
//   };
// }

export default AstroPage;
