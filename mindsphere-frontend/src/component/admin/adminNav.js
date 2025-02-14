import React from "react";
import "./admin.css";
import logo from "../../images/logo.png";

const AdminNav = () => {
  return (
    <nav className="admin-nav">
      <div className="admin-logo-container">
        <img src={logo} ></img>
      </div>
      <h2>Welcome to Admin Panel</h2>
    </nav>
  );
};

export default AdminNav;