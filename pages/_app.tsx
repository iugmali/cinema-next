import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import {RecoilRoot} from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>iugmali.com</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                            console.log('built');
                        `
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp
