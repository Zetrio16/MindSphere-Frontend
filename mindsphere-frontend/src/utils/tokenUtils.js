import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

// ✅ Function to validate token and renew if expired
export const isTokenValid = async () => {
    const token = localStorage.getItem("token");
    const API_URL = process.env.REACT_APP_API_URL;

    // Check if token exists
    if (!token) {
        return false;
    }

    try {
        // Decode token and check expiration
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        // Check if token has expired
        if (decodedToken.exp < currentTime) {
            console.log("Token expired. Attempting to renew...");

            // Remove old token
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            try {
                // Request a new token from the backend
                const response = await axios.post(`${API_URL}/auth/renew-token`, {
                    email: decodedToken.email
                });

                const newToken = response.data.newToken;
                const user = response.data.user;

                // Save the new token and user data to localStorage
                localStorage.setItem("token", newToken);
                localStorage.setItem("user", JSON.stringify(user));

                console.log("New token acquired successfully.");
                return true;

            } catch (error) {
                console.error("Failed to renew token:", error);
                alert("Session expired. Please log in again.");
                return false;
            }
        }

        // Token is still valid
        return true;

    } catch (error) {
        // Invalid token
        console.error("Invalid token detected:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        alert("Invalid authentication token. Please log in again.");
        return false;
    }
};
