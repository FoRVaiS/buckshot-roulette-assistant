import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from '@/components/theme-provider';

import App from './pages/App/App.tsx';
import './index.scss';

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);

const queryClient = new QueryClient();
root.render(<>
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </React.StrictMode>
    <ReactQueryDevtools />
  </QueryClientProvider>
</>);
