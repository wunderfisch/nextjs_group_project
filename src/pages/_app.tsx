import React from 'react';
import { AppProps } from 'next/app';
import TextChat from '../components/TextChat'
import Footer from '../components/Footer'
import '@/styles/globals.css'
import ProgressBar from '@/components/ProgressBar';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <ProgressBar />
      <TextChat />
      <Footer />
    </>
  );
};

export default MyApp;
