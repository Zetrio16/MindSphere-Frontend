import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Nav from './component/nav/nav';
import MainBody from './component/main/main';
import Team from './component/our-team/team';
import ServicesPage from './pages/service-page/service-page';
import CareerGuidance from './pages/career-guidance/career-guidance';
import GoogleForm from "./pages/googleForm/google-form";
import Contact from './pages/contact/contact';
import Footer from './component/footer/footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
        <Route path="/google-form" element={<GoogleForm />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
