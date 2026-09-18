import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import DesignsPage from './pages/DesignsPage';
import MotionPage from './pages/MotionPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import WorkDetailPage from './pages/WorkDetailPage';
import RouteTransition from './components/framer/RouteTransition';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RouteTransition />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/designs" element={<DesignsPage />} />
        <Route path="/design" element={<DesignsPage />} />
        <Route path="/motion" element={<MotionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/work/:slug" element={<WorkDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Analytics />
      <SpeedInsights />
    </>
  );
}
