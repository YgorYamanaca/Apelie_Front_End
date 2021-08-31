import React from 'react';
import { AppProps } from 'next/app';
import ApelieGlobalProvider from 'template/ApeliePageTemplate/provider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <ApelieGlobalProvider>
      <Component {...pageProps} />
    </ApelieGlobalProvider>
  </>
);

export default App;
