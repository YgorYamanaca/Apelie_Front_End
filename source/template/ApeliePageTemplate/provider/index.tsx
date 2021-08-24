import React from 'react';
import ApelieThemeProvider from '@/stores/ThemeManager';
import { QueryClient, QueryClientProvider } from 'react-query';
import ApelieToastProvider from '@/stores/ToastStore';
import ApelieUserProvider from '@/stores/UserManager';

const queryClient = new QueryClient();

const ApelieGlobalProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ApelieThemeProvider>
      <ApelieToastProvider>
        <ApelieUserProvider>{children}</ApelieUserProvider>
      </ApelieToastProvider>
    </ApelieThemeProvider>
  </QueryClientProvider>
);

export default ApelieGlobalProvider;
