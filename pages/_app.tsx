import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>iugmali.com - cinema</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                            console.log('built');
                        `
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
