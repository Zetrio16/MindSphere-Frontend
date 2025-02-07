"use client"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./notFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to home after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Oops! Page Not Found</h2>
      <p className="not-found-text">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <p className="not-found-redirect">You will be redirected to the homepage in 5 seconds.</p>
      <button onClick={()=>{navigate("/")}} className="not-found-link">
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
