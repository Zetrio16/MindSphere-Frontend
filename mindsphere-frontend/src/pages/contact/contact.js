import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import logo from "../../images/expertise.avif"
import "./contact.css"

export default function ContactPage() {
    return (
        <div className="contact-container">
            <div className="about-header">
                <p className="about-title"> About Us </p>
            </div>

            <div className="contact-content">
                <div className="about-section text-center">
                    <div className="about-image">
                        <img src={logo} alt="MindSphere Team" className="feature-image" />
                    </div>
                    <div className="about-text">
                        <div className="what-sets-us-apart">
                            <h2>What Sets Us Apart</h2>
                            <p>
                                At MindSphere, we believe in transforming lives through comprehensive mental health support and career
                                guidance. Our team of experienced professionals is dedicated to providing personalized care and guidance
                                to help you achieve your full potential.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contact-grid">
                    <div className="contact-info-card">
                        <div className="contact-header">
                            <h3>Get in Touch</h3>
                            <p>We're here to help and answer any questions you might have</p>
                        </div>

                        <div className="contact-details">
                            <a href="tel:+923001234567" className="contact-item">
                                <Phone className="contact-icon" />
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+92 324 6460779</p>
                                </div>
                            </a>

                            <a href="mailto:info@mindsphere.com" className="contact-item">
                                <Mail className="contact-icon" />
                                <div>
                                    <h4>Email Us</h4>
                                    <p>mindsphere360@gmail.com</p>
                                </div>
                            </a>

                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>123 Main Street, Suite 4A</p>
                                    <p>Islamabad, Pakistan</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <Clock className="contact-icon" />
                                <div>
                                    <h4>Office Hours</h4>
                                    <p>Monday - Saturday: 02:00 PM - 06:00 PM</p>
                                    <p>Saturday: 03:00 PM - 07:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Connect With Us</h4>
                            <div className="social-icons">
                                <a href="https://facebook.com/mindsphere" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="social-icon" />
                                </a>
                                <a href="https://www.instagram.com/mindspheregrw/" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="social-icon" />
                                </a>
                                <a href="https://linkedin.com/company/mindsphere" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="social-icon" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8755183994477!2d73.0290124!3d33.6518766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df952e017d0acd%3A0xf20be4a76782ceaf!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1623456789012!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

