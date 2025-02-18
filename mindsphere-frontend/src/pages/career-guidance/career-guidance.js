import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GoogleForm from "../googleForm/google-form";
import "./career-guidance.css";
import { isTokenValid } from "../../utils/tokenUtils";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL.trim();

export default function CareerGuidance() {
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [requestStatus, setRequestStatus] = useState("approved"); // default to approved
  const [tests, setTests] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Fetch request status when component loads
  useEffect(() => {
    const fetchRequestStatus = async () => {
      if (!isTokenValid()) return;

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/student/request-status`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Update request status
        setRequestStatus(response.data.status);
      } catch (error) {
        console.error("Error fetching request status:", error);
        setRequestStatus("error"); // fallback if the request fails
      }
    };

    fetchRequestStatus();
  }, []);

  // ✅ Fetch test info from /tests-info API
  useEffect(() => {
    const fetchTestInfo = async () => {
      try {
        const response = await axios.get(`${API_URL}/student/tests-info`);
        const fetchedTests = response.data.data.map((test) => ({
          ...test
        }));
        //console.log("Fetched tests with DB IDs:", fetchedTests);
        setTests(fetchedTests);
      } catch (error) {
        console.error("Error fetching test info:", error);
      }
    };

    fetchTestInfo();
  }, []);


  // ✅ Handle button click: Start test if approved
  const handleStartTest = (testId) => {
    if (!isTokenValid()) {
      alert("Please log in to start the test.");
      return;
    }

    if (requestStatus === "approved") {
      if (window.confirm("Are you sure you want to start the test?")) {
        setSelectedTestId(testId);
        setShowForm(true);
      }
    } else if (requestStatus === "pending") {
      alert("Your request is still pending. Please wait for admin approval.");
    } else {
      alert("Error retrieving request status. Please try again later.");
    }
  };

  useEffect(() => {
    if (location.pathname === "/career-guidance") {
      setShowForm(false);
      setSelectedTestId(null);
    }
  }, [location.pathname]);

  return (
    <div className="career-guidance-container">
      {showForm ? (
        <GoogleForm testId={selectedTestId} />
      ) : (
        <>
          <h1 className="career-guidance-title mt-5 mb-0">Career Guidance & Counselling</h1>
          <div className="container mb-5">
            <p style={{ margin: "20px 0px", textAlign: "center", width: "70%", margin: "30px auto" }}>
              Discover more about yourself with these three insightful tests. Whether you want to understand your personality, explore career interests, or assess your skills, each test is designed to guide you. Click to begin your journey of self-discovery!
            </p>
            <div className="tests-grid">
              {tests.map((test) => (
                <div key={test._id} className="test-card">
                  <h2 className="test-title">{test.title}</h2>
                  <p className="test-description">{test.description}</p>
                  <button
                    onClick={() => handleStartTest(test._id)}
                    className={`start-test-btn ${requestStatus === "pending" ? "disabled" : ""}`}
                    disabled={requestStatus === "pending"}
                  >
                    {requestStatus === "pending" ? "Request Pending" : "Start Test"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
