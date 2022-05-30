import './styles.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { FC } from 'react';
import OrderCheck from './pages/OrderCheck';
import OrderView from './pages/OrderView';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrderCheck />} />
          <Route path="/order" element={<OrderView />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
