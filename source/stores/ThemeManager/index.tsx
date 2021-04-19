import React, { createContext } from 'react';
import GlobalStyle from '@/components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ligthTheme from './modes/ligthMode';

export const AppThemeContext = createContext<{}>({});

const ApelieThemeProvider: React.FC = ({ children }) => (
  <AppThemeContext.Provider value={{}}>
    <ThemeProvider
      theme={{
        colors: ligthTheme,
      }}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </AppThemeContext.Provider>
);

export default ApelieThemeProvider;
