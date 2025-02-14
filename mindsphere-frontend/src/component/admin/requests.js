import React, { useEffect, useState } from "react";
import "./admin.css";

const Requests = () => {
  const [requests, setRequests] = useState([]);

  const test = {
    title: "Midterm Examination",
    description: "This is the midterm test covering all major topics.",
    date: "2024-03-15",
    googleFormLink: "https://forms.google.com/dummy-link",
  };

  useEffect(() => {
    const dummyRequests = [
      { _id: "1", studentId: "S123", testId: "T001", status: "Pending" },
      { _id: "2", studentId: "S124", testId: "T002", status: "Approved" },
      { _id: "3", studentId: "S125", testId: "T003", status: "Rejected" },
    ];
    setRequests(dummyRequests);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req._id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  return (
    <div className="container test-requests">
      <h2>Test Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Test ID</th>
            <th>Test Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Request Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req._id}>
              <td>{req.studentId}</td>
              <td>{req.testId}</td>
              <td>{test.title}</td>
              <td>{test.description}</td>
              <td>{test.date}</td>
              <td>
                <select
                  className={`form-select w-100 ${
                    req.status === "Approved"
                      ? "bg-success text-light"
                      : req.status === "Rejected"
                      ? "bg-danger text-light"
                      : "bg-warning text-dark"
                  }`}
                  value={req.status}
                  onChange={(e) => handleStatusChange(req._id, e.target.value)}
                >
                  <option value="Pending" className="bg-warning text-dark">
                    Pending
                  </option>
                  <option value="Approved" className="bg-success text-light">
                    Approved
                  </option>
                  <option value="Rejected" className="bg-danger text-light">
                    Rejected
                  </option>
                </select>
              </td>
              <td>
                <a
                  href={test.googleFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  View Test
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;
