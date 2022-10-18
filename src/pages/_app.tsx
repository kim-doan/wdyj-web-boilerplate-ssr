import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import React from 'react';

import { globalStyles } from '../styles/global';
import theme from '../styles/theme';

const cache = createCache({ key: 'next' });
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  </QueryClientProvider>
);

export default App;
