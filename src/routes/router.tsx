import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Main } from '../components';
import Layout from './layout';
import { Experience } from 'components/Experience';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<Navigate to="/portfolio/home" replace />} />
          <Route path="home" element={<Main />} />
          <Route path="experience" element={<Experience />} />

          <Route path="*" element={<Navigate to="/portfolio/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
