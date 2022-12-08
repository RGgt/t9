import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import './App.css';
import { CardSetViewPage } from '../pages/CardSetViewPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/cards/:topic/:collection/:hand"
        element={<CardSetViewPage />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
