import React from 'react';
import ApelieThemeProvider from '@/stores/ThemeManager';
import { QueryClient, QueryClientProvider } from 'react-query';
import ApelieToastProvider from '@/stores/ToastStore';

const queryClient = new QueryClient();

const ApelieGlobalProvider:React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ApelieThemeProvider>
      <ApelieToastProvider>
        {children}
      </ApelieToastProvider>
    </ApelieThemeProvider>
  </QueryClientProvider>
);

export default ApelieGlobalProvider;
