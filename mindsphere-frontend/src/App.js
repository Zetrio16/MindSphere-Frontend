import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Nav from './component/nav/nav';
import MainBody from './component/main/main';
import Team from './component/our-team/team';
import ServicesPage from './pages/service-page/service-page';
import CareerGuidance from './pages/career-guidance/career-guidance';
import GoogleForm from "./pages/googleForm/google-form";
import Contact from './pages/contact/contact';
import Footer from './component/footer/footer';
import BookingForm from './pages/bookingForm/bookingForm';
import NotFound from './pages/notFound/notFound';

// ✅ Private Route Component
const PrivateRoute = ({ element, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (!token) {
    return <Navigate to="/login" />; // Redirect if not logged in
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />; // Redirect if role is unauthorized
  }

  return element;
};

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainBody />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
        <Route path="/google-form" element={<GoogleForm />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/bookingForm' element={<BookingForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
