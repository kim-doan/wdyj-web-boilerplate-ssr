import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { AppProps } from 'next/app';
import React, { useState } from 'react';

import { globalStyles } from '../styles/global';
import theme from '../styles/theme';

const cache = createCache({ key: 'next' });

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) => {
  const [client] = useState(() => new QueryClient());

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          <Hydrate state={pageProps.dehydratedState}>
            {globalStyles}
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
