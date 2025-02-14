import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GoogleForm from "../googleForm/google-form";
import "./career-guidance.css";

export default function CareerGuidance() {
  const [selectedTestId, setSelectedTestId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const tests = [
    {
      id: 1,
      title: "The Big Five Personality Test",
      description: "Gain a deeper understanding of your personality traits and how they shape your thoughts, behaviors, and relationships. This test evaluates openness, conscientiousness, extraversion, agreeableness, and emotional stability to give you a well-rounded insight into your personality."
    },
    {
      id: 2,
      title: "Riasec Test",
      description: "Discover your career interests and explore professional paths that align with your strengths and preferences. This test categorizes you into six personality types—Realistic, Investigative, Artistic, Social, Enterprising, and Conventional—helping you make informed career choices."
    },
    {
      id: 3,
      title: "Aptitude Test",
      description: "Assess your problem-solving abilities, logical reasoning, and critical thinking skills. This test helps you identify your natural strengths in areas such as numerical reasoning, verbal skills, and spatial awareness, guiding you toward fields where you can excel."
    }
  ];


  const handleStartTest = (testId) => {
    if (window.confirm("Are you sure you want to start the test?")) {
      setSelectedTestId(testId);
      setShowForm(true);
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
            <p style={{ margin: "20px 0px", textAlign: "center", width: "70%", margin: "30px auto" }}>Discover more about yourself with these three insightful tests. Whether you want to understand your personality, explore career interests, or assess your skills, each test is designed to guide you. Click to begin your journey of self-discovery!</p>
            <div className="tests-grid">
              {tests.map((test) => (
                <div key={test.id} className="test-card">
                  <h2 className="test-title">{test.title}</h2>
                  <p className="test-description">{test.description}</p>
                  <button onClick={() => handleStartTest(test.id)} className="start-test-btn">
                    Start test
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
