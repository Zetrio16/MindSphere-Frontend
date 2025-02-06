import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/fonts.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Nav from './component/nav/nav';
import Footer from './component/footer/footer';
import MainBody from './component/main/main';
import ServicesPage from './pages/service-page/service-page';

function App() {
  return (
    <Router>
      <Nav /> {/* Navigation should be outside Routes */}
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
