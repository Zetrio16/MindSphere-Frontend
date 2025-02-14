import React from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import logo from "../../images/logo.png";
import logoutIcon from "../../images/logout.webp";

const AdminNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // Redirect to homepage after logout
  };

  return (
    <nav className="admin-nav">
      <div className="admin-logo-container">
        <img src={logo} alt="Admin Logo" />
      </div>
      <h2>Welcome to Admin Panel</h2>
      <button onClick={handleLogout} className="logout-button">
        <img src={logoutIcon} alt="Logout" className="logout-icon" />
      </button>
    </nav>
  );
};

export default AdminNav;
