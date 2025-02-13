import React from "react";
import "./admin.css";

const TestDetails = () => {
  // Dummy data instead of fetching from backend
  const test = {
    title: "Midterm Examination",
    description: "This is the midterm test covering all major topics.",
    date: "2024-03-15",
    status: "Scheduled",
    googleFormLink: "https://forms.google.com/dummy-link",
  };

  // if (!test) return <p>Loading...</p>; // Backend fetching would handle this

  return (
    <div className="test-details">
      <h2>{test.title}</h2>
      <p><strong>Description:</strong> {test.description}</p>
      <p><strong>Date:</strong> {new Date(test.date).toLocaleDateString()}</p>
      <p><strong>Status:</strong> {test.status}</p>
      <p>
        <strong>Google Form Link:</strong>{" "}
        <a href={test.googleFormLink} target="_blank" rel="noopener noreferrer">
          {test.googleFormLink}
        </a>
      </p>
    </div>
  );
};

export default TestDetails;
