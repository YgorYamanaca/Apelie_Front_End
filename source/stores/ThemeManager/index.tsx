import React, {
  createContext, useState, useEffect, useMemo, useCallback,
} from 'react';
import GlobalStyle from '@/components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import shadow from '@/themes/shadow';
import typography from '@/themes/typography';
import darkPalette from '@/themes/colors/DarkPalette';
import lightPalette from '@/themes/colors/LightPalette';

type ITheme = 'Dark' | 'Ligth'

interface IToastContext {
  toggleTheme: () => void
}

export const AppThemeContext = createContext<IToastContext>({ toggleTheme: () => {} });

const ApelieThemeProvider: React.FC = ({ children }) => {
  const [apelieTheme, setApelieTheme] = useState<ITheme>();
  const actualTheme = useMemo(() => (apelieTheme === 'Dark' ? darkPalette : lightPalette), [apelieTheme]);

  useEffect(() => {
    const theme = localStorage.getItem('ApelieTheme') as ITheme;
    if (!apelieTheme && theme) {
      setApelieTheme(theme);
    } else {
      setApelieTheme('Ligth');
      localStorage.setItem('ApelieTheme', 'Ligth');
    }
  }, []);

  const toggleTheme = useCallback(
    () => {
      setApelieTheme(apelieTheme === 'Dark' ? 'Ligth' : 'Dark');
      localStorage.setItem('ApelieTheme', apelieTheme === 'Dark' ? 'Ligth' : 'Dark');
    },
    [apelieTheme],
  );

  return (
    <AppThemeContext.Provider value={{ toggleTheme }}>
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
