import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../images/logo.png";

function Nav() {
    return (
        <nav className="d-flex justify-content-between align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo-container">
                    <NavLink to="/">
                        <img src={logo || "/placeholder.svg"} alt="Logo" />
                    </NavLink>
                </div>
                <ul className="list-unstyled d-flex justify-content-between align-items-center">
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
                <NavLink to="/login" className="btn login-btn">
                    Log In
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;
