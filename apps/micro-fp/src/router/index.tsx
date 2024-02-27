import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage1 from '../pages/HomePage1';
import HomePage2 from '../pages/HomePage2';

function Router() {
  // eslint-disable-next-line no-underscore-dangle
  const basename = window.__POWERED_BY_QIANKUN__ ? '/micro-fp' : '/';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Navigate to={'/HomePage1'} />} />
        <Route path="/HomePage1" element={<HomePage1 />} />
        <Route path="/HomePage2" element={<HomePage2 />} />
        <Route path="*" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
