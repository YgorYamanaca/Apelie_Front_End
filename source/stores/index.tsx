import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ApelieThemeProvider from '@/stores/ThemeManager';
import ApelieToastProvider from '@/stores/ToastStore';
import ApelieUserProvider from '@/stores/UserManager';
import ApelieCookiesNotification from './CookiesNotificationManager';

const queryClient = new QueryClient();

const ApelieGlobalProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ApelieThemeProvider>
      <ApelieToastProvider>
        <ApelieUserProvider>
          {children}
        </ApelieUserProvider>
        <ApelieCookiesNotification />
      </ApelieToastProvider>
    </ApelieThemeProvider>
  </QueryClientProvider>
);

export default ApelieGlobalProvider;
