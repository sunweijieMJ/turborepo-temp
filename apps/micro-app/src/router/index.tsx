import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage1 from '../pages/HomePage1';
import HomePage2 from '../pages/HomePage2';

function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Navigate to={'/micro-app/HomePage1'} />} />
        <Route path="/micro-app/HomePage1" element={<HomePage1 />} />
        <Route path="/micro-app/HomePage2" element={<HomePage2 />} />
        <Route path="*" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
