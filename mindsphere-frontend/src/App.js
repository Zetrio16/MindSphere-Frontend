import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

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
import PrivacyPolicy from './pages/privacy-policy/privacy-policy';
import { useEffect } from 'react';

// admin
import AdminLayout from './component/admin/AdminLayout';
import Dashboard from './component/admin/dashboard';
import Users from './component/admin/users';
import Requests from './component/admin/requests';
import BookingDetails from './component/admin/bookingDetails';
import { isTokenValid } from './utils/tokenUtils';

import { useNavigate } from 'react-router-dom';

// ✅ Private Route Component (Uncommented & Fixed)
const PrivateRoute = ({ element, allowedRoles, redirectPath = "/" }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user')); // Parse stored user object
  const userRole = user ? user.role : null; // Get role safely
  const navigate = useNavigate();

  useEffect(() => {

    if (!isTokenValid()) {
      alert('Please log in again.');
      navigate('/');
      return;
    }

    if (!token) {
      alert("You must be logged in to access this page.");
    } else if (allowedRoles && !allowedRoles.includes(userRole)) {
      alert("You do not have permission to access this page.");
    }
  }, [token, userRole]);

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Nav />}  {/* Non-admin routes ke liye Navbar */}

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainBody />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
        <Route path="/google-form" element={<PrivateRoute element={<GoogleForm />} redirectPath="/career-guidance" />} />
        <Route path="/team" element={<Team />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/bookingForm' element={<PrivateRoute element={<BookingForm />} redirectPath="/services" />} />

        {/* ✅ Admin Routes - Restricted to Admin Only */}
        <Route path="/admin" element={<PrivateRoute element={<AdminLayout />} allowedRoles={["admin"]} redirectPath="/" />}>
          {/* <Route path="dashboard" element={<PrivateRoute element={<Dashboard />} allowedRoles={["admin"]} />} /> */}
          <Route path="dashboard" element={<PrivateRoute element={<Users />} allowedRoles={["admin"]} />} />
          <Route path="requests" element={<PrivateRoute element={<Requests />} allowedRoles={["admin"]} />} />
          <Route path="bookingDetails" element={<PrivateRoute element={<BookingDetails />} allowedRoles={["admin"]} />} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}  {/* Non-admin routes ke liye Footer */}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
