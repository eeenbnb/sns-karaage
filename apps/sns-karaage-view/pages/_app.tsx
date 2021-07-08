import React from 'react';
import { AppProps } from 'next/app';
import './styles.scss';

import { TopHeader } from '../components/top-header/top-header'
import { TopSection } from '../components/top-section/top-section'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopHeader/>
      <TopSection>
        <Component {...pageProps} />
      </TopSection>
    </>
  );
}

export default CustomApp;
