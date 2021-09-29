import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.initialize('G-G3SWTT2357', {
      debug: true,
      gaOptions: {
        siteSpeedSampleRate: 100,
      },
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      {/* <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.ANALYTICS_ID}', {
          page_path: window.location.pathname,
        });
      `,
          }}
        />
      </Head> */}

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
