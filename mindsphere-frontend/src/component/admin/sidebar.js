import React from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/requests">Test Requests</Link></li>
        <li><Link to="/admin/bookingDetails">Booking Requests</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
