import './styles.scss';
import '@pixelpay/fonts/dist/gilroy.css';
import '@pixelpay/fonts/dist/icons.css';
import '@pixelpay/fonts/dist/logos.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { FC } from 'react';
import ImgBox from './components/ImgBox';
import OrderCheck from './pages/OrderCheck';
import OrderView from './pages/OrderView';
import { ReactQueryDevtools } from 'react-query/devtools';
import Summary from './pages/Summary';

const queryClient = new QueryClient();
const imgUrl = '../public/resoruces/logo.png';

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ImgBox className="logo" imgUrl={imgUrl} altAttr={'logo'} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrderCheck />} />
          <Route path="/order" element={<OrderView />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
