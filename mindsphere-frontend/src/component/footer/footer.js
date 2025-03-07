import React from "react";
import "./footer.css";
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    {/* Logo - col-2 for larger screens, full width for smaller screens */}
                    <div className="col-lg-2 col-md-12 col-sm-12 text-center">
                        <div className="footer-logo">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>

                    {/* Other Sections - col-8 for larger screens, full width for smaller screens */}
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 footer-section">
                                <h3>Follow Us</h3>
                                <ul>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Location</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12 footer-section">
                                <h3>Hours</h3>
                                <ul>
                                    <li><a><span>Mon to Sat:</span> 02:00 PM - 06:00 PM</a></li>
                                    <li><a><span>Fri:</span> 03:00 PM - 07:00 PM</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-12 footer-section">
                                <h3>Policy</h3>
                                <ul>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><a href="#">Accessibility Statement</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <hr style={{ backgroundColor: 'blue' }} />
                    &copy; 2025 by mindsphere. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
