import React from 'react';
import { jwtDecode } from 'jwt-decode';
import { isTokenValid } from '../../utils/tokenUtils';

// Map test IDs to Google Forms base URLs and corresponding email field IDs
const formConfigs = {
    "1": {
        url: "https://docs.google.com/forms/d/e/1FAIpQLSdskc6tEq2aSC6nnj9kvfnoyRsIu-y_rS3c0ElJvKdyxI1t4A/viewform",
        emailFieldId: "entry.816324005"
    },
    "2": {
        url: "https://docs.google.com/forms/d/e/1FAIpQLScNnrmXWCPwNO0gZCUYCnjCytgeHWJTtxP3Gvw-ltYadvSgTQ/viewform",
        emailFieldId: "entry.587003963"
    },
    "3": {
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeokCpbRWW9cU_rGqYWU9ixUpQcV-5HOseJGQiFDaMgbv3J0g/viewform",
        emailFieldId: "entry.382592610"
    }
};

function GoogleForm({ testId }) {
    // Retrieve the logged-in user's email from the token
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    let userEmail = null;

    try {
        if (isTokenValid()) {
            //console.log("Decoded token:", user);
            userEmail = user.email; 
        } else {
            alert("You must be logged in to access this form.");
            return null;
        }
    } catch (error) {
        console.error("Invalid token:", error);
        alert("Invalid or expired session. Please log in again.");
        return null;
    }

    // Get form configuration based on testId
    const formConfig = formConfigs[testId];

    // Construct the Google Form URL with the email pre-filled
    const formUrl = formConfig
        ? `${formConfig.url}?usp=pp_url&${formConfig.emailFieldId}=${encodeURIComponent(userEmail)}`
        : null;

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {formUrl ? (
                <iframe
                    src={formUrl}
                    style={{ width: "100vw", height: "100vh", border: "none" }}
                    title={`Google Form ${testId}`}
                ></iframe>
            ) : (
                <h1>Invalid Test</h1>
            )}
        </div>
    );
}

export default GoogleForm;
