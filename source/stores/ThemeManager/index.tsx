import React, { createContext } from 'react';
import GlobalStyle from '@/components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import lightPalette from '@/themes/colors/LightPalette';
import darkPalette from '@/themes/colors/DarkPalette';
import shadow from '@/themes/shadow';
import typography from '@/themes/typography';

export const AppThemeContext = createContext<{}>({});

const ApelieThemeProvider: React.FC = ({ children }) => (
  <AppThemeContext.Provider value={{}}>
    <ThemeProvider
      theme={{
        colors: lightPalette,
        borderRadius: '4px',
        typography,
        shadow,
      }}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </AppThemeContext.Provider>
);

export default ApelieThemeProvider;
