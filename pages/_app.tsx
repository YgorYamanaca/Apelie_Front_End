import React from 'react';
import { AppProps } from 'next/app';
import ApelieGlobalProvider from '@/stores/index';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ApelieGlobalProvider>
    <div id="modal-root" />
    <Component {...pageProps} />
  </ApelieGlobalProvider>
);

export default App;
