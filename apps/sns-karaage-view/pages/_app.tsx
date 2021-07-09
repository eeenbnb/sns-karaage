import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';

import { TopHeader } from '../components/top-header/top-header'
import { TopFooter } from '../components/top-footer/top-footer'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Head>
      <TopHeader/>

      <Component {...pageProps} />

      <TopFooter/>
    </>
  );
}

export default CustomApp;
