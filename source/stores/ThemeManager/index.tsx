import React, { createContext } from 'react';
import GlobalStyle from '@/components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import lightPalette from '@/themes/colors/LightPalette';
import darkPalette from '@/themes/colors/DarkPalette';

export const AppThemeContext = createContext<{}>({});

const ApelieThemeProvider: React.FC = ({ children }) => (
  <AppThemeContext.Provider value={{}}>
    <ThemeProvider
      theme={{
        colors: darkPalette,
      }}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </AppThemeContext.Provider>
);

export default ApelieThemeProvider;
