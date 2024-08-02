import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import BookingPage from './pages/BookingPage/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage/ConfirmedBookingPage';

export function AppRoutes() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking-confirmed" element={<ConfirmedBookingPage />} />
      </Routes>
  );
}