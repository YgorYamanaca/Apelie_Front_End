import React, { createContext } from 'react';
import GlobalStyle from '@/components/GlobalStyle';

export const ModeChangeContext = createContext<{}>({});

const ThemeManager: React.FC = ({ children }) => (
  <ModeChangeContext.Provider value={{}}>
    <GlobalStyle />
    {children}
  </ModeChangeContext.Provider>
);

export default ThemeManager;
