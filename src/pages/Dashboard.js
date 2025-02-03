import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import './Dashboard.css';

const Dashboard = () => {
  const { accounts, instance } = useMsal();
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    if (accounts.length > 0) {
      setUserProfile(accounts[0]); // Use existing login info
    } else {
      navigate('/'); // Redirect to home if not logged in
    }
  }, [accounts, navigate]);

  const handleLogout = async () => {
    await instance.logoutPopup();
    navigate('/'); // Redirect user to home page after logout
  };

  if (!userProfile) return <p className="loading">Loading user profile...</p>;

  return (
    <div className="dashboard-container">
      <div className="welcome-card fade-in">
        <h2>Welcome, {userProfile.name || "User"}!</h2>
        <p>Email: {userProfile.username || "N/A"}</p>
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
      </div>

      <div className="about-section slide-in">
        <h3>About This App</h3>
        <p>
          This application provides **secure authentication** using **Azure AD B2C**.
          It allows users to log in and manage authentication via Microsoft's identity platform.
        </p>
        <h4>🔹 Technologies Used:</h4>
        <ul>
          <li>⚡ React.js (Frontend)</li>
          <li>⚡ Azure AD B2C (Authentication)</li>
          <li>⚡ MSAL.js (Microsoft Authentication Library)</li>
          <li>⚡ CSS Animations & UI Enhancements</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
