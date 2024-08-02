import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import BookingPage from './pages/BookingPage/BookingPage';

export function AppRoutes() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
      </Routes>
  );
}