import React, { createContext } from 'react';
import GlobalStyle from '@/components/GlobalStyle';

export const AppThemeContext = createContext<{}>({});

const AppThemeManager: React.FC = ({ children }) => (
  <AppThemeContext.Provider value={{}}>
    <GlobalStyle />
    {children}
  </AppThemeContext.Provider>
);

export default AppThemeManager;
