import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../images/logo.png";
import Login from "../login/login";

function Nav() {
    return (
        <nav className="d-flex justify-content-between align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo-container">
                    <NavLink to="/">
                        <img src={logo || "/"} alt="Logo" />
                    </NavLink>
                </div>
                <ul className="list-unstyled d-flex justify-content-between align-items-center">
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
