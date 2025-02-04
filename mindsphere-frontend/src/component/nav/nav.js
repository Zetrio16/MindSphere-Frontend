import React from 'react'
import './nav.css'

function Nav() {
    return (
        <>
            <nav className='d-flex justify-content-between align-items-center'>
                <img src="logo.png" alt="Logo" className="img-fluid rounded-top" />
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