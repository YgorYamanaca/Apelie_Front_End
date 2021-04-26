import React, {
  createContext, useState, useCallback, useLayoutEffect, useMemo,
} from 'react';
import GlobalStyle from '@/components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import lightPalette from '@/themes/colors/LightPalette';
import shadow from '@/themes/shadow';
import typography from '@/themes/typography';
import darkPalette from '@/themes/colors/DarkPalette';

type ITheme = 'Dark' | 'Ligth'

export const AppThemeContext = createContext<Function>(() => {});

const ApelieThemeProvider: React.FC = ({ children }) => {
  const [apelieTheme, setApelieTheme] = useState<ITheme>();
  const actualTheme = useMemo(() => (apelieTheme === 'Dark' ? darkPalette : lightPalette), [apelieTheme]);

  useLayoutEffect(() => {
    const theme = localStorage.getItem('ApelieTheme') as ITheme;
    if (!apelieTheme && theme) {
      setApelieTheme(theme);
    }
    localStorage.setItem('ApelieTheme', theme === 'Dark' ? 'Dark' : 'Ligth');
  }, []);

  const toggleTheme = useCallback(
    () => {
      setApelieTheme(apelieTheme === 'Dark' ? 'Ligth' : 'Dark');
      localStorage.setItem('ApelieTheme', apelieTheme === 'Dark' ? 'Ligth' : 'Dark');
    },
    [apelieTheme],
  );

  return (
    <AppThemeContext.Provider value={toggleTheme}>
      <ThemeProvider
        theme={{
          colors: actualTheme,
          borderRadius: '4px',
          typography,
          shadow,
        }}
      >
        <GlobalStyle />
        {apelieTheme && children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export default ApelieThemeProvider;
