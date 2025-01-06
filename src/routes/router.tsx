import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './layout';
import { Banner } from 'components/Banner';
import { Career } from 'components/Career';
import { Experience } from 'components/Experience';
import { Project } from 'components/Project';
import { Resume } from 'components/Resume';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<Navigate to="/portfolio/home" replace />} />
          <Route path="home" element={<Banner />} />
          <Route path="resume" element={<Resume />} />
          <Route path="experience" element={<Experience />} />
          <Route path="career" element={<Career />} />
          <Route path="project/:pageId" element={<Project />} />

          <Route path="*" element={<Navigate to="/portfolio/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
