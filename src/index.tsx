import React from 'react';
import ReactDOM from 'react-dom/client';
// 
import { QueryClient, QueryClientProvider } from "react-query";
//components
import App from './App';
//style
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    //confige option of react-query
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

