import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('analytics ---------------------');

    ReactGA.initialize(`${process.env.ANALYTICS_ID}`);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;
