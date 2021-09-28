import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ReactGA from 'react-ga';

function MyApp({ Component, pageProps }: AppProps) {
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
