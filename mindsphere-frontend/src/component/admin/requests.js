import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

const API_URL = process.env.REACT_APP_API_URL.trim();

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [tests, setTests] = useState([]);

  // ✅ Fetch test information and requests on mount
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      try {
        // ✅ Fetch test information
        const testResponse = await axios.get(`${API_URL}/admin/tests-details`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTests(testResponse.data.data);

        // ✅ Fetch test requests
        const requestsResponse = await axios.get(`${API_URL}/admin/requests`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRequests(requestsResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // ✅ Handle status change for requests
  const handleStatusChange = async (id, newStatus) => {
    const token = localStorage.getItem('token');

    try {
      // ✅ Update request status
      const statusEndpoint =
        newStatus === "approved"
          ? `${API_URL}/admin/approve-request/${id}`
          : `${API_URL}/admin/reject-request/${id}`;

      await axios.put(
        statusEndpoint,
        {},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      // ✅ Update request date to current date and time
      const currentDate = new Date().toISOString();
      await axios.put(
        `${API_URL}/admin/requests/${id}/update-date`,
        { date: currentDate },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      // ✅ Update local state
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req._id === id
            ? { ...req, status: newStatus, date: currentDate }
            : req
        )
      );

      console.log(`Request ${id} updated to ${newStatus} with new date.`);
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  return (
    <div className="container test-requests">
      <h2 className="mb-4">Test Information</h2>

      {/* ✅ Table 1: Test Details */}
      <table className="mb-5">
        <thead>
          <tr>
            <th>Test Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tests.length > 0 ? (
            tests.map((test, index) => (
              <tr key={index}>
                <td>{test.title}</td>
                <td>{test.description}</td>
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
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">Loading test information...</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2 className="mb-4">Test Requests</h2>

      {/* ✅ Table 2: Student Requests */}
      <table className="mb-5">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Email</th>
            <th>Status Last Updated</th>
            <th>Request Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((req) => (
              <tr key={req._id}>
                <td>{req.studentId?.name || "N/A"}</td>
                <td>{req.studentId?.email || "N/A"}</td>
                <td>{new Date(req.date).toLocaleString()}</td>
                <td>
                  <select
                    className={`form-select w-100 ${
                      req.status === "approved"
                        ? "bg-success text-light"
                        : req.status === "rejected"
                        ? "bg-danger text-light"
                        : "bg-warning text-dark"
                    }`}
                    value={req.status}
                    onChange={(e) => handleStatusChange(req._id, e.target.value)}
                  >
                    <option value="pending" className="bg-warning text-dark">
                      Pending
                    </option>
                    <option value="approved" className="bg-success text-light">
                      Approved
                    </option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">Loading requests...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;
