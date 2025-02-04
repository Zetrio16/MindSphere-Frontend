import React from 'react'
import './nav.css'
import logo from './logo.png'; 

function Nav() {
    return (
        <>
            <nav className='d-flex justify-content-between align-items-center'>
                <div className='logo-container'>
                <img src={logo} alt="Logo" className="img-fluid rounded-top" />
                </div>
                <ul className='list-unstyled d-flex justify-content-between align-items-center'>
                    <li>Services</li>
                    <li>Career Guidance</li>
                    <li>Team</li>
                    <li>Contact us</li>
                </ul>
                <a href="#" className='btn login-btn'>Log In</a>
            </nav>
        </>
    )
}

export default Nav