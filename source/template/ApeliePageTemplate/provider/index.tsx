import React from 'react';
import ApelieThemeProvider from '@/stores/ThemeManager';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const ApelieGlobalProvider:React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ApelieThemeProvider>
      {children}
    </ApelieThemeProvider>
  </QueryClientProvider>
);

export default ApelieGlobalProvider;
