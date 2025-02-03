import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { useNavigate } from "react-router-dom"; // Import navigation
import "./AuthButton.css";

const AuthButton = () => {
  const { instance, accounts } = useMsal();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate(); // React Router navigation

  useEffect(() => {
    if (accounts.length > 0) {
      setIsAuthenticated(true);
      setUser(accounts[0]);
      navigate("/dashboard"); // Automatically go to Dashboard after login
    }
  }, [accounts, navigate]);

  const login = async () => {
    setLoading(true);
    try {
      const loginResponse = await instance.loginPopup({
        scopes: ["openid", "profile", "offline_access"],
        authority: `https://${process.env.REACT_APP_TENANT_NAME}.b2clogin.com/${process.env.REACT_APP_TENANT_NAME}.onmicrosoft.com/B2C_1_SignUpSignIn/v2.0`,
      });

      console.log("Login Success:", loginResponse);

      const tokenResponse = await instance.acquireTokenPopup({
        scopes: ["openid", "profile", "offline_access"],
      });

      console.log("Access Token:", tokenResponse.accessToken);

      setIsAuthenticated(true);
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await instance.logoutPopup();
      setIsAuthenticated(false);
      setUser(null);
      navigate("/"); // Redirect to home after logout
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="auth-container">
      {!isAuthenticated ? (
        <div className="login-button-container">
          <button
            className="auth-button login"
            onClick={login}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {loading ? <div className="spinner"></div> : "Log In / Register"}
          </button>

          {showTooltip && <div className="tooltip">Click to log in via Microsoft</div>}
        </div>
      ) : (
        <div className="logged-in-container">
          <p className="welcome-message">Welcome, {user?.username || "User"}!</p>
          <button className="auth-button logout" onClick={logout}>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthButton;
