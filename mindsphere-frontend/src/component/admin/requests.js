import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

const API_URL = process.env.REACT_APP_API_URL.trim();

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [tests, setTests] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      try {
        const testResponse = await axios.get(`${API_URL}/admin/tests-details`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTests(testResponse.data.data);

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

  const handleStatusChange = async (id, newStatus) => {
    const token = localStorage.getItem('token');

    try {
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

      const currentDate = new Date().toISOString();
      await axios.put(
        `${API_URL}/admin/requests/${id}/update-date`,
        { date: currentDate },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

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

  const handleFetchReport = async (email) => {
    if (isFetching) {
      alert("Please wait, another report is being fetched.");
      return;
    }

    setIsFetching(true);
    setLoadingStates((prev) => ({ ...prev, [email]: true }));

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        `${API_URL}/admin/fetch-test-results/${email}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log("✅ Fetch initiated, waiting 10 seconds...");

      await new Promise((resolve) => setTimeout(resolve, 10000));

      const response = await axios.get(`${API_URL}/admin/download/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Report-${email}.docx`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      console.log("✅ Report downloaded successfully.");
    } catch (error) {
      console.error("❌ Error fetching report:", error);
    } finally {
      setIsFetching(false);
      setLoadingStates((prev) => ({ ...prev, [email]: false }));
    }
  };

  return (
    <div className="container test-requests">

      <h2 className="mb-4">Test Information</h2>

      <div class="table-container">
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
                  <td className="titl">{test.title}</td>
                  <td className="descri">{test.description}</td>
                  <td>
                    <a
                      href={test.googleFormLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm p-3"
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
      </div>

      <h2 className="mb-4">Test Requests</h2>
      
      <div class="table-container">
        <table className="mb-5">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student Email</th>
              <th>Status Last Updated</th>
              <th>Request Status</th>
              <th>Report</th>
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
                      className={`form-select w-100 ${req.status === "approved"
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
                  <td>
                    <button
                      className="btn btn-primary btn-md w-100"
                      onClick={() => handleFetchReport(req.studentId?.email)}
                      disabled={loadingStates[req.studentId?.email] || isFetching}
                    >
                      {loadingStates[req.studentId?.email] ? (
                        <div className="d-flex align-items-center justify-content-center">
                          <span style={{ marginRight: "8px", fontWeight: "bold" }}>Generating Report. Please Wait...</span>
                          <div className="spinner"></div>
                        </div>

                      ) : (
                        <div>Download Report</div>
                      )}
                    </button>
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
    </div>
  );
};

export default Requests;