import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext'
import './career-guidance.css'

export default function CareerGuidance() {

  const navigate = useNavigate(); // useNavigate must be inside the component

  const tests = [
    {
      id: 1,
      title: "The big five personality test",
      description: "Gain a deeper understanding of your traits and how they influence your thoughts, behaviors, and relationships. It provides a detailed analysis of openness, conscientiousness, extraversion, agreeableness, and emotional stability.",
      path: "/tests/big-five"
    },
    {
      id: 2,
      title: "Riasec test",
      description: "Discover your career interests and explore paths that align with your personality and skills. This test highlights your top three interest areas to guide career choices.",
      path: "/tests/riasec"
    },
    {
      id: 3,
      title: "Aptitude test",
      description: "Identify your strengths and potential in various areas to guide personal and professional growth. This test assesses your abilities in problem-solving, critical thinking, and specific skill sets.",
      path: "/tests/aptitude"
    }
  ]

  const randomFunction = () => {
    console.log("Random function");
    if (window.confirm("Are you sure you want to start the test?"))
      navigate("/google-form"); // Navigate to the Google Form page
  };

  return (
    <div className="career-guidance-container">
      <h1 className="career-guidance-title">
        Career guidance & Counselling
      </h1>

      <div className="tests-grid">
        {tests.map((test) => (
          <div key={test.id} className="test-card">
            <h2 className="test-title">{test.title}</h2>
            <p className="test-description">{test.description}</p>
            <button onClick={randomFunction}
              className="start-test-btn">
              Start test
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
