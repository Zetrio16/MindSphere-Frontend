import React, { useEffect, useState } from "react";
import "./admin.css";

const Requests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // fetch("/api/requests")    // URL
    //   .then((response) => response.json())
    //   .then((data) => setRequests(data))
    //   .catch((error) => console.error("Error fetching requests:", error));
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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req._id}>
              <td>{req.studentId}</td>
              <td>{req.testId}</td>
              <td className="custom-dropdown-wrapper">
                <select className="custom-dropdown"
                  value={req.status}
                  onChange={(e) => handleStatusChange(req._id, e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;
