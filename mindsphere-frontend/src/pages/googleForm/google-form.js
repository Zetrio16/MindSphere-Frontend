import React, { useState, useEffect } from 'react';
import { isTokenValid } from '../../utils/tokenUtils';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL.trim();

function GoogleForm({ testId }) {
    const [formUrl, setFormUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ Retrieve the logged-in user's email
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    let userEmail = null;

    // ✅ Fetch test configuration from the API using the testId
    useEffect(() => {
        const fetchTestConfig = async () => {
            try {


                if (isTokenValid()) {
                    userEmail = user.email;
                } else {
                    alert("You must be logged in to access this form.");
                    return null;
                }

                const response = await axios.get(`${API_URL}/student/tests-urls/${testId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const { googleFormLink, emailFieldId } = response.data.data;

                // Construct the Google Form URL with the email pre-filled
                const constructedUrl = `${googleFormLink}?usp=pp_url&${emailFieldId}=${encodeURIComponent(userEmail)}`;
                setFormUrl(constructedUrl);
            } catch (err) {
                console.error("Error fetching test configuration:", err);
                setError("Failed to load the test form.");
            } finally {
                setLoading(false);
            }
        };

        fetchTestConfig();
    }, [testId, token, userEmail]);

    // ✅ Render the form or an appropriate message
    if (loading) {
        return <h2>Loading form...</h2>;
    }

    if (error) {
        return <h2 className="text-danger">{error}</h2>;
    }

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {formUrl ? (
                <iframe
                    src={formUrl}
                    style={{ width: "100vw", height: "100vh", border: "none" }}
                    title={`Google Form ${testId}`}
                ></iframe>
            ) : (
                <h1>Invalid Test ID</h1>
            )}
        </div>
    );
}

export default GoogleForm;
