import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logout from '../../images/logout.webp';
import './login.css';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_URL = process.env.REACT_APP_API_URL.trim();

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // Check if user is already logged in
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
 
    const handleSuccess = async (response) => {
        try {

            console.log("Google Response: ", response);
            const tokenId = response.credential;

            // Send token to backend for verification
            const res = await axios.post(`${API_URL}/auth/google-login`, {
                token: tokenId
            }, { withCredentials: true });

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            setUser(res.data.user); // Update state with user info

            // Redirect based on role
            if (res.data.user.role === 'admin') {
                navigate('/dashboard');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Google Login Failed:', error);
        }
    };

    const handleFailure = () => {
        console.error("Google Login Failed");
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <div className='login-container'>
                {user ? (
                    <div className='login-div'>
                        <span className='login-span'>{user.name}</span>
                        <button onClick={handleLogout}> <img src={logout}></img> </button>
                    </div>
                ) : (
                    <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
                )}
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
