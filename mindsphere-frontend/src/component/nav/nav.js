import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../images/logo.png";
import Login from "../login/login";

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null); // Ref for navbar

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navRef} className="d-flex justify-content-between align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo-container">
                    <NavLink to="/">
                        <img src={logo || "/"} alt="Logo" />
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✖" : "☰"}
                </button>

                {/* Navigation Links */}
                <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/career-guidance" className={({ isActive }) => (isActive ? "active" : "")}>
                            Career Guidance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/team" className={({ isActive }) => (isActive ? "active" : "")}>
                            Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                            Contact us
                        </NavLink>
                    </li>
                </ul>

                <Login />
            </div>
        </nav>
    );
}

export default Nav;
