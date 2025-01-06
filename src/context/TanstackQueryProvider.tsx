import React, { useState } from 'react';

import { QueryClientProvider, QueryClient, QueryCache } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface TanstackQueryProviderProps {
  children: React.ReactNode;
}

const tanstackQueryDefaultConfig = {
  QueryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        console.log('querycache error', error, query.state.data);
      }
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      useErrorBoundary: true,
      staleTime: 1000 * 60,
    },
  },
};

const TanstackQueryProvider = ({ children }: TanstackQueryProviderProps) => {
  const [queryClient] = useState(() => new QueryClient(tanstackQueryDefaultConfig));

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default TanstackQueryProvider;
