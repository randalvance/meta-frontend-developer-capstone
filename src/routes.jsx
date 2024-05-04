import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import BookingPage from './BookingPage';

export function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
        </Routes>
    </BrowserRouter>
  );
}