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
import { useEffect } from 'react';

// admin
import AdminLayout from './component/admin/AdminLayout';
import Dashboard from './component/admin/dashboard';
import Users from './component/admin/users';
import Requests from './component/admin/requests';
import TestDetails from './component/admin/testDetails';
import BookingDetails from './component/admin/bookingDetails';

const PrivateRoute = ({ element, allowedRoles, redirectPath = "/" }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  useEffect(() => {
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
    return <Navigate to="/" />;
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
        <Route path="/contact" element={<Contact />} />
        <Route path='/bookingForm' element={<PrivateRoute element={<BookingForm />} redirectPath="/services" />} />

        {/* Admin Routes with Layout */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="requests" element={<Requests />} />
          <Route path='testDetails' element={<TestDetails />} />
          <Route path="BookingDetails" element={<BookingDetails />} />
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
