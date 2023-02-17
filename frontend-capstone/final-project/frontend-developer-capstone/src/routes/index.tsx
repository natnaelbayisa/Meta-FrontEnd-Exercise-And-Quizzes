import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  ReservationsPage,
  AboutPage,
  LoginPage,
  MenuPage,
} from "src/pages";

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
};

export default RootRoute;
