import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Main } from '../components';
import Layout from './layout';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Navigate to={'/main'} replace />} />
          <Route path="/" element={<Navigate to={'/main'} replace />} />

          <Route path="main" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
