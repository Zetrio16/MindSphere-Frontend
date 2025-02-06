import React from "react";
import "./footer.css";
import logo from '../../images/logo.png'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container d-flex justify-content-between">

                <div className="col-2">
                    <div className="footer-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                <div className="col-7 d-flex justify-content-between">
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Location</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Hours</h3>
                        <ul>
                            <li><a><span>Mon to Sat:</span> 02:00 PM - 06:00 PM</a></li>
                            <li><a><span>Fri:</span> 03:00 PM - 07:00 PM</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Policy</h3>
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Accessibility Statement</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <hr style={{ backgroundColor: 'blue' }} />
                &copy; 2025 by mindsphere. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
