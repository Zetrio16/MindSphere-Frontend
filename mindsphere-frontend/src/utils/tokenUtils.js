import {jwtDecode} from 'jwt-decode';

// ✅ Function to validate token
export const isTokenValid = () => {
    const token = localStorage.getItem("token");

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
            // Token expired; clear from storage
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            alert("Session expired. Please log in again.");
            return false;
        }

        return true;

    } catch (error) {
        // Invalid token (tampering or invalid format)
        console.error("Invalid token detected:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        alert("Invalid authentication token. Please log in again.");
        return false;
    }
};
